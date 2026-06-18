import React from "react";
import BlogLayout from "@/components/blog-layout";
import { blogs as content } from "@/data/data";

const BlogOne = () => {
  const blog = content[0];
  return (
    <BlogLayout title={blog.name} displaydate={blog.displaydate}>
      <p className="blog-content">
        {
          "i've been programming for a long time now; my journey started with robotc, programming robot functionality to remote cotrols. i studied computer science at cal poly (slo) and since then have worked for raytheon and done a wide range of freelance projects. throughout that time one thing has remained consistent my coding setup."
        }
      </p>
      <p className="blog-content">
        {
          "for the longest time i was rocking the generic vs code config with not much customization, the most i would do is install a few plugins and change the theme. for my termial i was rocking an item2 setup i had gotten from my brother but never really understood what was going on under the hood (i was using it because i didn't know any better)."
        }
      </p>
      <p className="blog-content">
        {
          "at the beginning of last year, i started getting into customizing my computer and trying new tools. I tested a bunch of new browsers, terminal emulators, window managers, etc. I even dabbled with nvim as my code editor of choice because i had heard it was lightweight(in some cases) and customizable. I first started with nvim distros like lazyvim and even setup my own config from scratch(using lua but it was really janky so i moved back to lazyvim). "
        }
      </p>
      <p className="blog-content">
        {
          "learning about all of the shortcuts keybindings, being able to use lazyvim like legos and add plugins like lazygit made my experience more enjoyable/productive and showed me the world of incredible tools that very talented developers have created."
        }
      </p>
      <p className="blog-section-heading">
        {"now how does all of this make me a better vscode user?"}
      </p>
      <p className="blog-content">
        {
          'i noticed after i got to my "optimal" setup it was looking a lot like vs code and i believe i heard somewhere if you are just remaking vs code you should probably just use vs code, especially since it has a bigger plugin eco-system (less setup and worry about updates breaking something).'
        }
      </p>
      <p className="blog-content">
        {
          "through neovim forcing me to use shortcuts and new tools i was able to distill the aspects i really wanted/needed into vs code and be much more intentional with my configs. most importantly it was tailored to what i wanted and not what some article or youtube video told me."
        }
      </p>
    </BlogLayout>
  );
};

export default BlogOne;
