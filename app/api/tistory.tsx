import { TISTORY_ACCES } from "../../config";
import { Ttoken } from "../../token";

export const JsonType = "&output=json";
export const BlogName = "&blogName=songmok-blog";
export const PageNumber = "&page=1";
export const TtokenAndJson = `?access_token=${Ttoken}${JsonType}`;
export const BlogInfo = "https://www.tistory.com/apis/blog/info";
export const BlogList = "https://www.tistory.com/apis/post/list";
export const BlogCate = "https://www.tistory.com/apis/category/list";
