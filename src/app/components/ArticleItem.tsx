interface ArticleItemProps {
  title: string;
  content: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, content }) => (
  <article className="py-4">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="font-light line-clamp-2 my-1 text-gray-300  ">{content}</p>
  </article>
);

export default ArticleItem;
