function Speakers() {
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
      {speakers.map((sp) => {
        return <img src={sp.imageSrc} alt={sp.name} key={sp.imageSrc} />;
      })}
    </div>
  );
}

export default Speakers;
