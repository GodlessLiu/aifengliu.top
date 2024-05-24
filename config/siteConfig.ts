export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    metadata: {
        home_title: "Hilary Liu",
        home_description: "Hilary Liu's Blog",
        post_title: "Blog - Hilary Liu",
        post_description: "Hilary Liu's posts",
    },
    footer: {
        record_number: "蜀ICP备2023027118号",
        introduction: {
            name: "Hilary Liu",
            github: "https://github.com/GodlessLiu"
        },
    },
    navItems: [
        {
            label: "Blog",
            href: "/posts",
            icon: "mdi:blog-outline"
        },
        {
            // 朋友圈
            label: "Moments",
            href: "/moments",
            icon: "ic:outline-photo"
        },
        {
            label: "Projects",
            href: "/projects",
            icon: "octicon:project-24"
        }
    ],
};
