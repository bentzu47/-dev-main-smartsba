import { defineStore } from "pinia";

interface CommentBox {
    id: string;
    name: string;
    className: string;
    isEdit: false;
}

export const useCommentBoxStore = defineStore("commentbox", {
    state: (): CommentBox => {
        return {
            id: "comment",
            name: "comment",
            className: "",
            isEdit: false,
        };
    },
});
