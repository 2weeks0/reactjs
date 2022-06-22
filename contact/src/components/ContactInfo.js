import PropsType from "prop-types";

export default function ContactInfo(props) {
  return <p onClick={props.onClick}>{props.name}</p>;
}

ContactInfo.propsType = {
  name: PropsType.string,
  onClick: PropsType.func,
};

ContactInfo.defaultProps = {
  onClick: () => {
    console.error("onClick is not defined.");
  },
};
