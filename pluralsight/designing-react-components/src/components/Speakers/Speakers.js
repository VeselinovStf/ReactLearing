const Speakers = () => {
  const speakers = [
    {
      imageSrc: "images/speaker-component-1124.png",
      name: "He Cares",
    },
    {
      imageSrc: "images/speaker-component-1530.png",
      name: "Go Cares",
    },
    {
      imageSrc: "images/speaker-component-10803.png",
      name: "Mo Cares",
    },
  ];

  return (
    <div>
      {speakers.map(({imageSrc,name}) => {
        return <img src={imageSrc} alt={name} key={imageSrc} />;
      })}
    </div>
  );
}

export default Speakers;
