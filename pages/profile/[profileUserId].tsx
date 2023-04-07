import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../../src/components/NavBar/NavBar";
import { getUserInfo } from "../../src/axiosRequest/api/user";
import ProfileHeader from "../../src/components/ProfilePage/ProfileHeader";
import ProfileGalleryAndCollection from "../../src/components/ProfilePage/ProfileGalleryAndCollection";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";

export interface User {
  firstName: string;
  lastName: string;
  avatarPath: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isGallery, setIsGallery] = useState(true);
  const router = useRouter();
  const { profileUserId } = router.query;

  useEffect(() => {
    if (!router.isReady || !profileUserId || user) return;

    getUserInfo(profileUserId).then(({ data }) => {
      setUser(data);
    });
  }, [profileUserId, router.isReady]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />

          {user && (
            <ProfileHeader
              user={user}
              isGallery={isGallery}
              setIsGallery={setIsGallery}
            ></ProfileHeader>
          )}

          {profileUserId && (
            <ProfileGalleryAndCollection
              isGallery={isGallery}
              profileUserId={profileUserId}
            ></ProfileGalleryAndCollection>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
