interface ArticleItemProps {
    title: string;
    content: string;
  }
  
  const ArticleItem: React.FC<ArticleItemProps> = ({ title, content }) => (
    <article>
      <h3 className="font-bold">{title}</h3>
      <p className="font-light">{content}</p>
    </article>
  );
  
  export default ArticleItem;
  