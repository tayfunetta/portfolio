import Contact from "@/components/en/Contact";
import Intro from "@/components/en/Intro";
import Layout from "@/components/Layout";
import MyStack from "@/components/en/MyStack";
import Projects from "@/components/en/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useIndexListener, useTouchListener } from "@/components/useListener";

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<number>(1);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [initialScrollDown, setInitialScrollDown] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      useIndexListener({
        currentPageId,
        setCurrentPageId,
        setInitialScrollDown,
      });
    } else {
      useTouchListener({
        currentPageId,
        setCurrentPageId,
        setInitialScrollDown,
      });
    }
  });

  return (
    <Layout pageNum={currentPageId}>
      <AnimatePresence mode="wait">
        {
          {
            1: <Intro key={0} />,
            2: <MyStack key={1} initialScrollDown={initialScrollDown} />,
            3: <Projects key={2} initialScrollDown={initialScrollDown} />,
            4: <Contact key={3} />,
          }[currentPageId]
        }
      </AnimatePresence>
    </Layout>
  );
}
