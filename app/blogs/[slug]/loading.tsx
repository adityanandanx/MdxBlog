import PostLoading from "@/components/skeleton/PostLoading";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
    return <PostLoading />;
};

export default loading;
