import React from "react";
import BlogLayout from "@/components/blog-layout";
import { blogs as content } from "@/data/data";

const BlogThree = () => {
  const blog = content[2];
  return (
    <BlogLayout title={blog.name} displaydate={blog.displaydate}>
      <br />
      <p className="blog-section-heading">{"tldr"}</p>
      <p className="blog-content">
        {
          "ipad could be used as a computer replacement if you have another device that you can ssh into for code heavy tasks. ipad os has its quirks but you can still use it as a lightweight ssh client."
        }
      </p>
      <br />
      <p className="blog-section-heading">{"1.1 overview"}</p>
      <p className="blog-content">
        {
          "like the title suggests i’m daily driving an ipad to do all of my work. i acquired this ipad through a series of csgo like trade ups. i traded up from a 2018 ipad with the a12x bionic chip to a used m5 unit with a like new apple keyboard case. all in, i spent 800 bucks on a +$1800 setup."
        }
      </p>

      <br />
      <p className="blog-content blog-subheading">{"the things i need in a “computer”: "}</p>
      <p className="blog-content">
        {"(1) internet browser - manage deployments / check 3rd party tools."}
      </p>
      <p className="blog-content">
        {"(2) ai (app or cli) - learn new concepts / create boilerplate"}
      </p>
      <p className="blog-content">
        {"(3) code editor - git / code changes / deploy local apps"}
      </p>
      <p className="blog-content">
        {"(4) communication app - to ask for help / talk to clients "}
      </p>
      <br />

      <p className="blog-content">
        {
          "if i have my essentials i’m usually a pretty happy camper. in most cases, even a phone could cover the basics but the coding environment. that’s where we arrive at the huge caveat i have to disclose. i use this ipad as a lightweight ssh editor client. i use an m4 mac mini located at my desk. the secondary device could be replaced with a lightweight alternative—just requires ssh connectivity."
        }
      </p>

      <br />
      <p className="blog-section-heading">{"1.2 dev setup"}</p>
      <p className="blog-content blog-subheading">{"notion calendar"}</p>
      <img
        src="/notioncal.png"
        alt="notion calendar"
        className="w-full rounded-lg border border-zinc-800 my-4"
      />
      <p className="blog-content">
        {
          "most apps, they work as intended, but some apps have scaling issues or lack of keyboard shortcut support. for many of these apps, the browser version can get the job done. it’s not all bad, since i’m on an ipad i can store media onto my device"
        }
      </p>

      <img
        src="/setupdiagram.png"
        alt="setup diagram"
        className="w-full rounded-lg border border-zinc-800 my-4"
      />

      <p className="blog-content blog-subheading">{"editor demo"}</p>
      <video
        src="/editordemo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg border border-zinc-800 my-4"
      />

      <p className="blog-content">
        {"on the ipad i configured a vpn ("}
        <a
          href="https://tailscale.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link accent-link-hover"
        >
          {"tailscale"}
        </a>
        {") and a terminal emulator ("}
        <a
          href="https://termius.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link accent-link-hover"
        >
          {"termius"}
        </a>
        {
          "). why did i choose these? they are easy to setup. on the mac mini i setup my dev environment with my "
        }
        <a
          href="https://github.com/edolivar/dot-files"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link accent-link-hover"
        >
          {"configs"}
        </a>
        {
          " files. the  tmux and neovim  combo are perfect for this setup— keyboard shortcuts will work through the ssh connection. mobile browsers lack developer tools, luckily the workaround is to add the "
        }
        <a
          href="https://eruda.liriliri.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link accent-link-hover"
        >
          {"eruda"}
        </a>
        {" library."}
      </p>

      <p className="blog-content blog-subheading">{"developer tools"}</p>
      <img
        src="/devtools.png"
        alt="developer tools"
        className="w-full rounded-lg border border-zinc-800 my-4"
      />
      <br />

      <p className="blog-section-heading">{"1.3 latency"}</p>
      <p className="blog-content">
        {
          "for these test the tailscale vpn is active and i'm running a simple ping test, but since termius forces you to be in an ssh session by default (no local environment) i ran the test from mac mini to ipad. i would enable mosh but it forces neovim to fallback to a basic, colorless display mode and causes noticeably worse artifacting."
        }
      </p>

      <p className="blog-content blog-subheading">{"phone hotspot"}</p>
      <div className="bg-[#1e1e1e] p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <pre className="text-gray-300">
          <code className="whitespace-pre">
            {`PING 100.121.xxx.xxx (100.121.xxx.xxx): 56 data bytes
64 bytes from 100.121.xxx.xxx: icmp_seq=0 ttl=64 time=31.353 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=1 ttl=64 time=237.210 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=2 ttl=64 time=136.623 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=3 ttl=64 time=53.247 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=4 ttl=64 time=249.200 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=5 ttl=64 time=278.450 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=6 ttl=64 time=302.090 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=7 ttl=64 time=214.300 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=8 ttl=64 time=220.348 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=9 ttl=64 time=146.850 ms

--- 100.121.xxx.xxx ping statistics ---
10 packets transmitted, 10 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 31.353/186.967/302.090/87.248 ms`}
          </code>
        </pre>
      </div>
      <p className="blog-content blog-subheading">{"home network (fiber)"}</p>
      <div className="bg-[#1e1e1e] p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <pre className="text-gray-300">
          <code className="whitespace-pre">
            {`PING 100.121.xxx.xxx (100.121.xxx.xxx): 56 data bytes
64 bytes from 100.121.xxx.xxx: icmp_seq=0 ttl=64 time=5.813 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=1 ttl=64 time=6.711 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=2 ttl=64 time=19.579 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=3 ttl=64 time=39.273 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=4 ttl=64 time=60.192 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=5 ttl=64 time=75.061 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=6 ttl=64 time=10.069 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=7 ttl=64 time=59.317 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=8 ttl=64 time=26.653 ms
64 bytes from 100.121.xxx.xxx: icmp_seq=9 ttl=64 time=37.927 ms

-- 100.121.xxx.xxx ping statistics ---
10 packets transmitted, 10 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 5.813/34.059/75.061/23.302 ms`}
          </code>
        </pre>
      </div>

      <br />
      <p className="blog-section-heading">{"1.4 closing thoughts"}</p>
      <p className="blog-content">
        {
          "my ability to create code has not suffered since the migration. The navigation between apps and through the terminal feels snappy. I’m offloading all high-bandwidth and CPU-intensive tasks to a fiber-backed Mac Mini. I get desktop speeds over a hotspot with a fraction of the local battery drain. "
        }
      </p>
      <p className="blog-content">
        {
          "ps: super frustrating that apple can make something like the macbook neo but continues to kneecap the ipad.   "
        }
      </p>
    </BlogLayout>
  );
};

export default BlogThree;
