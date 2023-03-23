import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categoryPosts } from "../../src/axiosRequest/api/category";
import NavBar from "../../src/components/NavBar";
import CategoryHeader from "../../src/components/CategoryInside/CategoryHeader";
import PostList from "../../src/components/CategoryInside/CategoryInsidePosts";
import CategoryButton from "../../src/components/CategoryInside/CategoryButton";
import { getSynonymsAPI } from "../../src/axiosRequest/api/getSynonyms";


export interface ResponseImageData {
  _id: string;
  price: number;
  tag: string | string[] | undefined;
  userEmail: string;
  compressed_imageUrl: string;
  description: string;
  filename: string;
}



// Set all necessary states for rendering post lists and related category buttons
export default function CategoryInsidePage() {
  const router = useRouter();
  const { tag } = router.query;
  const [tagString, setTagString] = useState<string | string[] | undefined>("");
  const [category, setCategory] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);
  const [Error, setError] = useState(null);
  const [links, setLinks] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");

  //If the router is ready save the tag value from query to tagString state
  useEffect(() => {
    if (router.isReady && tag) {
      setTagString(tag);
      }
    }, [tag, router.isReady]);
  
  //Set the maximum number of posts per page
  let limit = 10;
  
  //Call the API to retrieve post data corresponding to input tag query
  const fetchImages = async () => {
    try {
      const res = await categoryPosts(tag, page, limit);
      if (res.status === 200) {
        setCategory([...category, ...res.data]);
        setPage(page + 1);
        if ([...res.data].length === 0) {
          setLoaderHandler(false);
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  //Reset and clear stored posts if user clicks on a new category tag
  const resetCategoryStateHandler = async (newTag: string) => {
    setCategory([]);
    setPage(1);
    setLoaderHandler(true);
    router.push(`/category/${newTag}`);    
  };

  //Call the API to retrieve a list of synonyms for our initial category query
  const getSynonyms = async (tagString: string | string[] | undefined) => {
    try {
      
      //const key = process.env.Get_Synonyms_API_Key;
      const response= await getSynonymsAPI(tagString);
      const data = response.data;
      const synonyms = data?.noun?.syn || data?.verb?.syn || [];
      // check if the response contains synonyms for the noun or verb form of the word, otherwise return an empty array
      return synonyms;
    } catch (error) {
      console.error("Error fetching synonyms:", error);
      return [];
    }
  };

  //This part handles the case when user clicks on 'back' button in browser
  useEffect(() => {
    // Save the previous URL when the component mounts
    setPrevUrl(window.location.href);
    const handlePopstate = () => {
      // Check if the user has navigated back
      if (window.location.href === prevUrl) {
        // Reset the page state to 1
        setCategory([]);
        setPage(1);
        setLoaderHandler(true);
        // Fetch the images for the new category
        fetchImages();
      }
      // Update the previous URL
      setPrevUrl(window.location.href);
    };

    // Add an event listener to the window object
    window.addEventListener("popstate", handlePopstate);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [tag]);

  useEffect(() => {
    if (!router.isReady) return;
    getSynonyms(tagString).then((response) => {
      setLinks(response);
    });
    fetchImages();
  }, [tagString, router.isReady, API_Prefix]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" />
      <CategoryHeader tagString={tagString} />
      <CategoryButton links={links} resetCategoryState={ resetCategoryStateHandler} />
      <PostList
        tagString={tagString as string | string[] | undefined}
        category={category}
        setCategory={setCategory}
        page={page}
        setPage={setPage}
        loaderHandler={loaderHandler}
        setLoaderHandler={setLoaderHandler}
        Error={Error}
        setError={setError}
      />
    </>
  );
}
