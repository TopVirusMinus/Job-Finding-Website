import CSS from "./Map.module.css";

const Map = () => {
  return (
    <>
      <div className={`${CSS.mapContainer} position-relative`}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.790461057676!2d30.955757515470662!3d29.956705229666245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458569393ca36ab%3A0xc1f1038e9a84b7a4!2sMSA!5e0!3m2!1sen!2seg!4v1663059937741!5m2!1sen!2seg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
