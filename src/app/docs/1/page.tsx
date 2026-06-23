"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import BlogLayout from "@/components/blog-layout";
import { documents as content } from "@/data/data";

const tocSections = [
  { id: "what-the-cli-does", label: "what the cli does" },
  { id: "requirements", label: "requirements" },
  { id: "authentication", label: "authentication" },
  { id: "project-setup", label: "project setup" },
  { id: "directory-mapping", label: "directory mapping" },
  { id: "config-format", label: "config format" },
  { id: "command-reference", label: "command reference" },
  { id: "sync-rules", label: "sync rules" },
  { id: "metadata-storage", label: "metadata storage" },
  { id: "markdown-support", label: "markdown support" },
  { id: "common-workflows", label: "common workflows" },
  { id: "known-current-behaviors", label: "known current behaviors" },
] as const;

const CodeBlock = ({ children }: { children: string }) => (
  <div className="bg-[#1e1e1e] p-6 rounded-lg font-mono text-sm overflow-x-auto my-4">
    <pre className="text-gray-300 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  </div>
);

const SectionTitle = ({
  children,
  id,
}: {
  children: string;
  id?: string;
}) => (
  <p id={id} className="blog-section-heading scroll-mt-24">
    {children}
  </p>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <p className="blog-content">{children}</p>
);

const DocumentOne = () => {
  const doc = content[0];
  const [activeSection, setActiveSection] = useState<string>(tocSections[0].id);

  useEffect(() => {
    const sectionElements = tocSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <BlogLayout title={doc.name} displaydate={doc.displaydate}>
      <div className="xl:flex xl:items-start xl:gap-12">
        <div className="min-w-0 flex-1">
      <p className="blog-content">
        <Link
          href="https://github.com/thedwncmpy/ns-cli.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-light-green underline underline-offset-4"
        >
          <FaGithub aria-hidden="true" />
          <span>{"thedwncmpy/ns-cli"}</span>
        </Link>
      </p>
      <p className="blog-content">
        {
          "`ns-cli` syncs Markdown files in a local notes tree with a Notion database through the `ns` command."
        }
      </p>
      <p className="blog-content">
        {
          "this guide is based on the current implementation in `lib/`, not on intended behavior."
        }
      </p>

      <br />
      <SectionTitle id="what-the-cli-does">{"what the cli does"}</SectionTitle>
      <Bullet>{"- uses exact filename-to-page-title matching."}</Bullet>
      <Bullet>
        {"- uses first-level directory mappings to scope relation-based sync."}
      </Bullet>
      <Bullet>
        {
          "- stores project config in `.ns-cli/config.json` under your notes root."
        }
      </Bullet>
      <Bullet>
        {"- stores downloaded page metadata in `.ns-cli/pages/**/*.json`."}
      </Bullet>
      <Bullet>{"- uploads Markdown to Notion."}</Bullet>
      <Bullet>{"- downloads Notion pages to Markdown."}</Bullet>
      <Bullet>{"- fails hard on ambiguous matches."}</Bullet>

      <br />
      <SectionTitle id="requirements">{"requirements"}</SectionTitle>
      <Bullet>{"- `zsh`"}</Bullet>
      <Bullet>{"- `python3`"}</Bullet>
      <Bullet>{"- `jq`"}</Bullet>
      <Bullet>{"- `curl`"}</Bullet>
      <Bullet>
        {"- a Notion integration token with access to the target database"}
      </Bullet>

      <br />
      <SectionTitle id="authentication">{"authentication"}</SectionTitle>
      <p className="blog-content">
        {"set `NOTION_TOKEN` in either of these places:"}
      </p>
      <CodeBlock>{`export NOTION_TOKEN="secret_xxx"`}</CodeBlock>
      <p className="blog-content">{"or in `~/.config/ns-cli/secrets.zsh`:"}</p>
      <CodeBlock>{`export NOTION_TOKEN="secret_xxx"`}</CodeBlock>
      <p className="blog-content">
        {"environment variables take precedence over the secrets file."}
      </p>

      <br />
      <SectionTitle id="project-setup">{"project setup"}</SectionTitle>
      <p className="blog-content">{"initialize a notes tree:"}</p>
      <CodeBlock>{`ns init --database-id <database_id> --notes-root ./notes`}</CodeBlock>
      <p className="blog-content">
        {
          "if your Notion database title property is not named `Name`, set it explicitly:"
        }
      </p>
      <CodeBlock>
        {`ns init --database-id <database_id> --notes-root ./notes --title-property Title`}
      </CodeBlock>
      <p className="blog-content">{"this creates:"}</p>
      <CodeBlock>{`notes/
  .ns-cli/
    config.json`}</CodeBlock>

      <br />
      <SectionTitle id="directory-mapping">{"directory mapping"}</SectionTitle>
      <p className="blog-content">
        {
          "`ns link` maps a first-level subdirectory under `notes_root` to a Notion relation page id and the relation property name used on database pages."
        }
      </p>
      <p className="blog-content">{"example:"}</p>
      <CodeBlock>{`ns link project rel_123 notebook`}</CodeBlock>
      <Bullet>
        {
          "- files under `notes/project/` sync against pages whose title equals the Markdown filename stem."
        }
      </Bullet>
      <Bullet>
        {
          "- those pages must also have a `notebook` relation containing `rel_123`."
        }
      </Bullet>
      <Bullet>{"- only first-level directories are mapped."}</Bullet>
      <Bullet>
        {"- `notes/project/daily/today.md` still uses the `project` mapping."}
      </Bullet>

      <br />
      <SectionTitle id="config-format">{"config format"}</SectionTitle>
      <p className="blog-content">{"example `.ns-cli/config.json`:"}</p>
      <CodeBlock>{`{
  "version": 1,
  "database_id": "db_test",
  "notes_root": "/absolute/path/to/notes",
  "title_property": "Name",
  "mappings": {
    "project": {
      "relation_page_id": "rel_123",
      "relation_property": "notebook"
    }
  },
  "watch": {
    "default_cooldown_seconds": 60,
    "files": {
      "project/today.md": {
        "enabled": true,
        "cooldown_seconds": 60,
        "last_uploaded_at": 1781899705
      }
    }
  }
}`}</CodeBlock>
      <p className="blog-content">
        {"legacy mapping values are still accepted:"}
      </p>
      <CodeBlock>{`{
  "mappings": {
    "project": "rel_123"
  }
}`}</CodeBlock>
      <p className="blog-content">
        {"in that case the relation property defaults to `notebook`."}
      </p>

      <br />
      <SectionTitle id="command-reference">{"command reference"}</SectionTitle>
      <p className="blog-section-heading">{"`ns init`"}</p>
      <CodeBlock>{`ns init --database-id <id> --notes-root <path> [--title-property <name>] [--force]`}</CodeBlock>
      <Bullet>
        {"- creates `.ns-cli/config.json` inside the notes root."}
      </Bullet>
      <Bullet>{"- `--force` overwrites an existing config."}</Bullet>

      <p className="blog-section-heading">{"`ns link`"}</p>
      <CodeBlock>{`ns link <subdir> <relation_page_id> <relation_property> [--force]`}</CodeBlock>
      <Bullet>{"- `subdir` must already exist under `notes_root`."}</Bullet>
      <Bullet>{"- `--force` overwrites an existing mapping."}</Bullet>

      <p className="blog-section-heading">{"`ns status`"}</p>
      <CodeBlock>{`ns status <file.md>`}</CodeBlock>
      <Bullet>
        {
          "- shows title, notes root, mapping directory, relation page id, relation property, and exact query filter used for sync."
        }
      </Bullet>
      <Bullet>
        {"- with no file argument, it prints the project config JSON."}
      </Bullet>

      <p className="blog-section-heading">{"`ns upload`"}</p>
      <CodeBlock>{`ns upload [--dry-run] <file.md>`}</CodeBlock>
      <Bullet>
        {"- file must exist, end in `.md`, and be inside `notes_root`."}
      </Bullet>
      <Bullet>
        {
          "- if the file is under a subdirectory, that first-level directory must be mapped."
        }
      </Bullet>
      <Bullet>{"- root-level files are allowed without a mapping."}</Bullet>
      <Bullet>
        {"- mapped files query by exact title plus exact relation membership."}
      </Bullet>
      <Bullet>{"- root-level files query by exact title only."}</Bullet>
      <Bullet>
        {
          "- if a single match exists, the existing remote page is archived, a new page is created, and Markdown blocks are appended to the new page."
        }
      </Bullet>
      <Bullet>{"- if no match exists, a new page is created."}</Bullet>
      <Bullet>{"- if multiple matches exist, the command fails."}</Bullet>
      <Bullet>{"- `--dry-run` prints intent only."}</Bullet>

      <p className="blog-section-heading">{"`ns upload-sync`"}</p>
      <CodeBlock>{`ns upload-sync [--dry-run]`}</CodeBlock>
      <Bullet>
        {
          "- uploads all Markdown files under the current directory recursively."
        }
      </Bullet>

      <p className="blog-section-heading">{"`ns rename`"}</p>
      <CodeBlock>{`ns rename <old-path.md> <new-path.md>`}</CodeBlock>
      <Bullet>{"- renames a note locally and in Notion."}</Bullet>
      <Bullet>
        {
          "- example: `ns rename project/today.md archive/weekly-summary.md`"
        }
      </Bullet>

      <p className="blog-section-heading">{"`ns watch`"}</p>
      <CodeBlock>{`ns watch [<file.md>] [--enable|--disable] [--cooldown-seconds <n>]`}</CodeBlock>
      <Bullet>
        {
          "- `ns watch <file.md> --enable` enables auto-upload for one Markdown file."
        }
      </Bullet>
      <Bullet>
        {
          "- `ns watch <file.md> --disable` disables auto-upload for one Markdown file."
        }
      </Bullet>
      <Bullet>{"- bare `ns watch` runs the watcher loop."}</Bullet>
      <Bullet>
        {
          "- the watcher scans `notes_root` for changed `.md` files but only uploads files that are explicitly enabled in config."
        }
      </Bullet>
      <Bullet>
        {"- it reuses the existing `ns upload` flow for each changed file."}
      </Bullet>
      <Bullet>
        {"- it stores per-file state in `watch.files[<relative-path>]`."}
      </Bullet>
      <Bullet>
        {
          "- it stores per-file `last_uploaded_at` timestamps in project config."
        }
      </Bullet>
      <Bullet>
        {
          "- it skips re-uploading the same file until the cooldown window expires."
        }
      </Bullet>
      <Bullet>
        {
          "- successful sync operations append a hidden audit line to `.ns-cli/sync.log`."
        }
      </Bullet>

      <p className="blog-section-heading">{"`ns watch-upload`"}</p>
      <CodeBlock>{`ns watch-upload <file.md>`}</CodeBlock>
      <Bullet>
        {
          "- uploads one Markdown file only if that file has watch enabled in config."
        }
      </Bullet>
      <Bullet>
        {
          "- it reuses the same cooldown and `last_uploaded_at` behavior as `ns watch`."
        }
      </Bullet>
      <Bullet>
        {
          "- it is intended for editor save hooks such as Neovim `BufWritePost`."
        }
      </Bullet>
      <Bullet>
        {
          "- it resolves the matching `ns` project from the saved file path, so it does not depend on the editor's current working directory."
        }
      </Bullet>

      <p className="blog-section-heading">{"`ns download`"}</p>
      <CodeBlock>{`ns download [--dry-run] <file.md>`}</CodeBlock>
      <Bullet>
        {"- target path must end in `.md` and be inside `notes_root`."}
      </Bullet>
      <Bullet>
        {
          "- if the path is under a subdirectory, that first-level directory must be mapped."
        }
      </Bullet>
      <Bullet>{"- root-level targets are allowed without a mapping."}</Bullet>
      <Bullet>
        {"- mapped files query by exact title plus exact relation membership."}
      </Bullet>
      <Bullet>{"- root-level files query by exact title only."}</Bullet>
      <Bullet>
        {
          "- if a single match exists, the remote page is converted to Markdown, the target file is created or overwritten, and page properties and icon metadata are written to `.ns-cli/pages/...json`."
        }
      </Bullet>
      <Bullet>{"- if no match exists, the command fails."}</Bullet>
      <Bullet>{"- if multiple matches exist, the command fails."}</Bullet>
      <Bullet>{"- `--dry-run` prints intent only."}</Bullet>

      <p className="blog-section-heading">{"`ns delete`"}</p>
      <CodeBlock>{`ns delete [--dry-run] <file.md>`}</CodeBlock>
      <Bullet>
        {"- target path must end in `.md` and be inside `notes_root`."}
      </Bullet>
      <Bullet>
        {
          "- if the path is under a subdirectory, that first-level directory must be mapped."
        }
      </Bullet>
      <Bullet>{"- root-level targets are allowed without a mapping."}</Bullet>
      <Bullet>
        {"- mapped files query by exact title plus exact relation membership."}
      </Bullet>
      <Bullet>{"- root-level file queries use exact title only."}</Bullet>
      <Bullet>
        {
          "- if a single match exists, the remote page is archived, the local Markdown file is deleted if present, and the matching `.ns-cli/pages/...json` sidecar is deleted if present."
        }
      </Bullet>
      <Bullet>{"- if no match exists, the command fails."}</Bullet>
      <Bullet>{"- if multiple matches exist, the command fails."}</Bullet>
      <Bullet>{"- `--dry-run` prints intent only."}</Bullet>

      <p className="blog-section-heading">{"`ns download-all`"}</p>
      <CodeBlock>{`ns download-all [--dry-run]`}</CodeBlock>
      <Bullet>
        {"- downloads every remote page in the current sync scope."}
      </Bullet>
      <Bullet>{"- from `notes_root`, it queries the full database."}</Bullet>
      <Bullet>
        {
          "- inside a mapped first-level directory, it queries only pages whose mapped relation contains that directory's relation page id."
        }
      </Bullet>
      <Bullet>
        {"- in a mapped scope, files download into that mapped directory."}
      </Bullet>
      <Bullet>
        {
          "- in root scope, the CLI tries to infer a mapped directory from each page's relations."
        }
      </Bullet>
      <Bullet>
        {
          "- if a page matches multiple directory mappings, the command fails for that page."
        }
      </Bullet>
      <Bullet>
        {
          "- if no mapping matches, the page downloads to the root of `notes_root`."
        }
      </Bullet>

      <p className="blog-section-heading">{"`ns download-sync`"}</p>
      <CodeBlock>{`ns download-sync [--dry-run]`}</CodeBlock>
      <Bullet>
        {
          "- downloads all Markdown files under the current directory recursively by calling `ns download` for each file path found locally."
        }
      </Bullet>
      <Bullet>{"- this command does not discover remote-only pages."}</Bullet>

      <p className="blog-section-heading">{"`ns completion`"}</p>
      <CodeBlock>{`ns completion <zsh|bash>

eval "$(ns completion zsh)"`}</CodeBlock>

      <p className="blog-section-heading">{"`ns version`"}</p>
      <CodeBlock>{`ns version`}</CodeBlock>

      <br />
      <SectionTitle id="sync-rules">{"sync rules"}</SectionTitle>
      <p className="blog-section-heading">{"title matching"}</p>
      <Bullet>{"- the page title is always the filename stem."}</Bullet>
      <CodeBlock>{`notes/project/today.md -> today`}</CodeBlock>
      <Bullet>{"- no frontmatter title override exists."}</Bullet>

      <p className="blog-section-heading">{"mapping rules"}</p>
      <Bullet>
        {
          "- only the first path segment under `notes_root` is used for relation mapping."
        }
      </Bullet>
      <Bullet>{"- unmapped nested files fail."}</Bullet>
      <Bullet>{"- root-level files do not require a mapping."}</Bullet>

      <p className="blog-section-heading">{"ambiguity"}</p>
      <Bullet>{"- more than one matching page is an error."}</Bullet>
      <Bullet>{"- missing required mapping is an error."}</Bullet>
      <Bullet>{"- missing config is an error."}</Bullet>
      <Bullet>{"- target outside `notes_root` is an error."}</Bullet>

      <br />
      <SectionTitle id="metadata-storage">{"metadata storage"}</SectionTitle>
      <p className="blog-content">
        {
          "downloaded page properties and icon metadata are stored in sidecar JSON files under:"
        }
      </p>
      <CodeBlock>{`.ns-cli/pages/`}</CodeBlock>
      <p className="blog-content">{"for example:"}</p>
      <CodeBlock>{`notes/.ns-cli/pages/project/today.json`}</CodeBlock>
      <p className="blog-content">
        {
          "the current upload flow reads these sidecars and uses them when recreating a page."
        }
      </p>
      <Bullet>
        {"- downloaded Markdown files are written as plain Markdown body only."}
      </Bullet>
      <Bullet>
        {
          "- the CLI currently does not embed `<!-- notion-properties ... -->` metadata blocks into the Markdown file body."
        }
      </Bullet>
      <Bullet>
        {"- sidecar JSON is the active metadata source when present."}
      </Bullet>

      <br />
      <SectionTitle id="markdown-support">{"markdown support"}</SectionTitle>
      <p className="blog-content">
        {"supported Markdown-to-Notion conversions include:"}
      </p>
      <Bullet>{"- paragraphs"}</Bullet>
      <Bullet>{"- headings `#`, `##`, `###`"}</Bullet>
      <Bullet>{"- toggle headings via `[toggle] `"}</Bullet>
      <Bullet>{"- bulleted lists"}</Bullet>
      <Bullet>{"- todo items `- [ ]` and `- [x]`"}</Bullet>
      <Bullet>{"- quotes"}</Bullet>
      <Bullet>{"- callouts using blockquote alert markers"}</Bullet>
      <Bullet>{"- fenced code blocks"}</Bullet>
      <Bullet>{"- dividers `---`"}</Bullet>
      <Bullet>{"- `[TOC]`"}</Bullet>
      <Bullet>{"- `[[link_to_page page_id:...]]`"}</Bullet>
      <Bullet>{"- `[[link_to_page database_id:...]]`"}</Bullet>

      <p className="text-lg font-bold">{"toggle headings"}</p>
      <p className="blog-content">
        {"use `[toggle] ` at the start of a heading text:"}
      </p>
      <CodeBlock>{`### [toggle] Section

  Paragraph inside toggle
  - Nested item`}</CodeBlock>
      <p className="blog-content">
        {
          "nested content is determined by indentation. the parser uses an indent width of 2 spaces."
        }
      </p>

      <p className="text-lg font-bold">{"callouts"}</p>
      <p className="blog-content">
        {"these blockquote markers map to Notion callouts:"}
      </p>
      <CodeBlock>{`> [!NOTE] Text
> [!WARNING] Text
> [!ERROR] Text
> [!INFO] Text
> [!SUCCESS] Text`}</CodeBlock>

      <p className="text-lg font-bold">{"code blocks"}</p>
      <p className="blog-content">
        {
          "fenced code blocks are supported. unknown languages are normalized to `plain text`."
        }
      </p>
      <p className="blog-content">{"language aliases include:"}</p>
      <Bullet>{"- `zsh` -> `shell`"}</Bullet>
      <Bullet>{"- `sh` -> `shell`"}</Bullet>
      <Bullet>{"- `py` -> `python`"}</Bullet>
      <Bullet>{"- `js` -> `javascript`"}</Bullet>
      <Bullet>{"- `ts` -> `typescript`"}</Bullet>
      <Bullet>{"- `yml` -> `yaml`"}</Bullet>
      <Bullet>{"- `md` -> `markdown`"}</Bullet>

      <br />
      <SectionTitle id="common-workflows">{"common workflows"}</SectionTitle>
      <p className="blog-content">{"initialize and upload one file:"}</p>
      <CodeBlock>{`export NOTION_TOKEN="secret_xxx"
ns init --database-id <db_id> --notes-root ./notes
ns link project <relation_page_id> notebook
ns upload ./notes/project/today.md`}</CodeBlock>
      <p className="blog-content">
        {"inspect what a file will do before syncing:"}
      </p>
      <CodeBlock>{`ns status ./notes/project/today.md
ns upload --dry-run ./notes/project/today.md
ns download --dry-run ./notes/project/today.md`}</CodeBlock>
      <p className="blog-content">
        {"download all pages for one mapped directory:"}
      </p>
      <CodeBlock>{`cd ./notes/project
ns download-all`}</CodeBlock>
      <p className="blog-content">
        {"download the full database into the notes tree:"}
      </p>
      <CodeBlock>{`cd ./notes
ns download-all`}</CodeBlock>
      <p className="blog-content">{"watch one file and run the watcher:"}</p>
      <CodeBlock>{`ns watch project/today.md --enable --cooldown-seconds 60
ns watch
ns watch project/today.md --disable`}</CodeBlock>
      <p className="blog-content">{"use `watch-upload` from an editor save hook:"}</p>
      <CodeBlock>{`ns watch-upload project/today.md`}</CodeBlock>

      <br />
      <SectionTitle id="known-current-behaviors">{"known current behaviors"}</SectionTitle>
      <Bullet>
        {
          "- `download-sync` works from local file discovery, not remote page discovery."
        }
      </Bullet>
      <Bullet>
        {
          "- uploading a matched page archives the old page and recreates it instead of patching blocks in place."
        }
      </Bullet>
      <Bullet>
        {
          "- Markdown property blocks are parsed if present, but normal downloads currently store metadata in sidecar JSON instead of writing those blocks back into Markdown."
        }
      </Bullet>
        </div>

        <aside className="hidden xl:block xl:w-64 xl:shrink-0 xl:self-start xl:sticky xl:top-24">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-light-green">
              {"On this page"}
            </p>
            <nav aria-label="Table of contents">
              <ul className="space-y-2 text-sm leading-6 text-white/70">
                {tocSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`block underline-offset-4 transition-colors ${
                        activeSection === section.id
                          ? "text-white underline"
                          : "text-white/70 hover:text-light-green"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </BlogLayout>
  );
};

export default DocumentOne;
