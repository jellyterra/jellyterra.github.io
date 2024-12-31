// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

function formatTime(date: Date) {
    const year = date.getUTCFullYear().toString().padEnd(4, '0')
    const month = (date.getUTCMonth() + 1).toString().padEnd(2, '0')
    const day = date.getUTCDate().toString().padEnd(2, '0')
    const hour = date.getUTCHours().toString().padEnd(2, '0')
    const minute = date.getUTCMinutes().toString().padEnd(2, '0')
    const second = date.getUTCSeconds().toString().padEnd(2, '0')
    return +`${year}${month}${day}${hour}${minute}${second}`
}

export const SITE_HOST = 'https://jellyterra.com'
export const SITE_HOSTNAME = 'jellyterra.com'
export const SITE_TITLE = 'Jelly Terra';
export const SITE_DESCRIPTION = 'Jelly Terra\'s Website';

export const BG_RANDOM_IMAGE_SRC = 'https://dmoe.cc/random.php'

export const NEXTCLOUD_MAILBOX = 'https://get.jellyterra.com/url/p/nextcloud/mailbox'

export const ANALYTICS = {
    host: 'https://analytics.jellyterra.com',
    deployTime: formatTime(new Date(Date.now()))
}

export const SOURCE = {
    base: 'https://github.com/jellyterra/jellyterra.github.io/commits/master'
}

export const PROMPT_ATTR = {
    texts: [
        "Student. Programmer. Socialist. ACGN. Maybe brilliant.",
        "Computer Science.",
        "Computer System Engineering.",
        "Computer Architecture.",
        "Formal Verification.",
        "Amateur Electronics Engineering.",
        "Go, Kotlin, Lean, Rust, Scala, TypeScript, OCaml.",
    ],
    rounds: 9999,
    duration: {
        type: 100,
        back: 10,
        stay: 2000,
        next: 5000,
    }
}

export const HEADER = {
    logo: {
        src: "/favicon.png",
        height: 50,
        width: 50
    },
    nav: [
        {
            title: "Blog",
            href: "/blog"
        },
        {
            title: "Journal",
            href: "/journal"
        },
        {
            title: "Crafting",
            href: "/crafting"
        },
        {
            title: "Self-Host",
            href: "/hosted"
        },
        {
            title: "Live Stream",
            href: "https://live.bilibili.com/31960659"
        },
        {
            title: "GitHub",
            href: "https://github.com/jellyterra"
        },
    ],
}

export const FOOTER = {
    copyright: {
        owner: "Jelly Terra",
        date: 2024,
        license_name: "Creative Commons Attribution-ShareAlike License 4.0",
        license_url: "https://creativecommons.org/licenses/by-sa/4.0/legalcode.en"
    },

    logo: {
        src: "/favicon.png",
        height: 100,
        width: 100
    },

    media: [
        {
            icon: "github",
            href: "https://github.com/jellyterra"
        },
        {
            icon: "x",
            href: "https://x.com/jellyterra"
        },
        {
            icon: "youtube",
            href: "https://www.youtube.com/@jellyterra",
        },
        {
            icon: "nextcloud",
            href: NEXTCLOUD_MAILBOX,
        },
        {
            icon: "bilibili",
            href: "https://space.bilibili.com/443340304",
        },
        {
            icon: "spotify",
            href: "https://open.spotify.com/user/t7l8rdnzrcne9lcgnp97hlk4b",
        },
        {
            icon: "maildotru",
            href: "mailto:jellyterra@symboltics.com",
        }
    ],

    lists: [
        {
            title: "Startups",
            links: [
                {
                    title: "Symboltics",
                    href: "https://symboltics.com",
                },
                {
                    title: "Symonarch",
                    href: "https://github.com/symonarch",
                },
                {
                    title: "Circuitrus",
                    href: "https://github.com/circuitrus",
                },
                {
                    title: "JetERA Creative",
                    href: "https://github.com/jetera-creative",
                },
                {
                    title: "LangVM Project",
                    href: "https://github.com/langvm",
                }
            ],
        },
        {
            title: "Blog",
            links: [
                {
                    title: "Activities",
                    href: "https://jellyterra.com/blog",
                },
                {
                    title: "Experience",
                    href: "https://jellyterra.com/blog",
                },
                {
                    title: "Techniques",
                    href: "https://jellyterra.com/blog",
                },
            ]
        },
        {
            title: "Gallery",
            links: [
                {
                    title: "Twitter Media",
                    href: "https://x.com/jellyterra/media",
                }
            ]
        },
        {
            title: "Journal",
            links: [
                {
                    title: "Nanjing & Shanghai Trip",
                    href: "https://x.com/jellyterra/status/1808809934340935683",
                },
                {
                    title: "RISC-V Summit China 2024",
                    href: "https://x.com/jellyterra/status/1826141151230914804"
                }
            ]
        }
    ],
}

export const BLOG_HEADER = {
    logo: {
        src: "/favicon.png",
        height: 50,
        width: 50
    },
    nav: [
        {
            title: "GitHub",
            href: "https://github.com"
        },
    ],
}

export const GISCUS_BLOG = {
    repo: "jellyterra/jellyterra.github.io",
    repoId: "R_kgDOLt6GLQ",
    category: "Blog",
    categoryId: "DIC_kwDOLt6GLc4CjYto",
    mapping: "og:title"
}

export const GISCUS_JOURNAL = {
    repo: "jellyterra/jellyterra.github.io",
    repoId: "R_kgDOLt6GLQ",
    category: "Journal",
    categoryId: "DIC_kwDOLt6GLc4CjYtn",
    mapping: "og:title"
}
