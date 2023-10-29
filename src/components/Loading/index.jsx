import Style from "./style.module.scss";

export const Loading = () => {
  return (
    <>
      <div className={Style.divLoading}>
        <div className={Style.ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
