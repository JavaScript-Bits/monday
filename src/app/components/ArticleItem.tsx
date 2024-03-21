interface ArticleItemProps {
  title: string;
  content: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, content }) => (
  <article className="py-4">
    <h3 className="font-extrabold text-lg mt-2">{title}</h3>
    <p className="text-lg line-clamp-2 text-gray-300 mt-2">{content}</p>
  </article>
);

export default ArticleItem;
