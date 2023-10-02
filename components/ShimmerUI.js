

const ShimmerUi = () => {
    return (
      <div className="restaruants-list">
        {Array(9)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer"></div>
          ))}
      </div>
    ); 
}

export default ShimmerUi;