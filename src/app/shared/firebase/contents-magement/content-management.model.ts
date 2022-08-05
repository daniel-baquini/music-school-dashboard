interface ContentManagement {
    contentUrl: string;
    course: {
        id: string;
        name: string;
    };
    contentType: "file" | "link";
    description: string;
    title: string;
}

export default ContentManagement