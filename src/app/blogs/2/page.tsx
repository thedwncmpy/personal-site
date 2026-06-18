import React from "react";
import BlogLayout from "@/components/blog-layout";
import { blogs as content } from "@/data/data";

const BlogTwo = () => {
  const blog = content[1];
  return (
    <BlogLayout title={blog.name} displaydate={blog.displaydate}>
      <br />
      <p className="blog-section-heading">
        {"tldr"}
      </p>
      <p className="blog-content">
        {
          'i noticed after i got to my "optimal" setup it was looking a lot like vs code and i believe i heard somewhere if you are just remaking vs code you should probably just use vs code, especially since it has a bigger plugin eco-system (less setup and worry about updates breaking something).'
        }
      </p>
      <br />
      <p className="blog-section-heading">
        {"1.1 overview"}
      </p>
      <p className="blog-content">
        {
          'if you have ever fix a printer for anyone, you may have likely been asked “what computer should i get?”. the answer is mac unless you’re shackled to windows. given apple’s hardware reputation. i wondered. does their software have the same polish? i needed a place to organize my thoughts as i navigated my way depths of leetcode hell.'
        }
      </p>
      <p className="blog-content">
        {
          'i started using apple notes, “its built in and will sync”. i thought. i, quickly, discovered a performance issue about 25 leetcode questions in (a very real unit of measurement). the note had a simple structure: headers and collapsable section for the rest of the text. with minor effort i was able to get notes to crash on my m5 ipad. on the bright side, the unusable performance is contained to that note. '
        }
      </p>
      <p className="blog-content">
        {
          'does apple know? am i the only one using apple notes? do they care or has the walled garden allowed for software mediocrity?'
        }
      </p>
      <p className="blog-content">
        {
          'determined to find a better solution. i tried notion. copied over the entire note, emulated the structure, and the performance was night and day.'
        }
      </p>

      <br />
      <p className="blog-section-heading">
        {"1.2 hypothesis"}
      </p>
      <p className="blog-content">
        {
          'the apple note had ~50 collapsible sections about ~9000 words (50 kb file). at around the 25 question point the performance decline became noticeably worse. all performance penalties could be avoided if all sections were in their expanded state. this led me to believe that the issue was apple’s rendering of each section. i believe, although invisible, all of the elements were still being rendered. the problem worsened when scrolling causing numerous re-renders, i’d imagine it works similarly to a web page. if you have several animations or  heavy javascript bundles a page may feel unresponsive. i wonder if this is a known bug in some legacy codebase developers are too scared to touch. '
        }
      </p>

      <br />
      <p className="blog-section-heading">
        {"1.4 evidence"}
      </p>
      <p className="blog-content blog-subheading">
        {
          'apple notes collapsed'
        }
      </p>
      <video
        src="/applecollapsed.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg border border-zinc-800 my-4"
      />
      <p className="blog-content blog-subheading">
        {
          'notion'
        }
      </p>
      <video
        src="/notion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg border border-zinc-800 my-4"
      />
      <p className="blog-content blog-subheading">
        {
          'apple notes expanded'
        }
      </p>
      <video
        src="/appleexpanded.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg border border-zinc-800 my-4"
      />
    </BlogLayout>
  );
};

export default BlogTwo;
