function Image({ img, className }) {
  return (
    <div className={`${className} image-container`}>
      <img src={img} className="image-grid" />
    </div>
  );
}

export default Image;
