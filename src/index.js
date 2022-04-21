import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Gbutton = (props) => {
  let buttonType;

  if (props.type === "primary") {
    buttonType = styles.primary;
  } else if (props.type === "primary-o") {
    buttonType = styles.primaryOutline;
  } else if (props.type === "secondary") {
    buttonType = styles.secondary;
  } else if (props.type === "secondary-o") {
    buttonType = styles.secondaryOutline;
  } else if (!props.type) {
    buttonType = styles.default;
  }

  return (
    <button
      {...props}
      className={buttonType}
      style={{
        borderRadius: "5px",
        padding: "5px 10px",
        cursor: "pointer"
      }}
    >
      {props.text}
    </button>
  )
};
