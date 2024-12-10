"use client";
type propsTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  className: string;
};

const CarouselPreviousBtn = (props: propsTypes) => {
  const { onClick, className } = props;
  return (
    <button
      aria-label="previous-button"
      onClick={onClick}
      className={`absolute left-0 md:left-[-40px] top-[50%] translate-y-[-50%] p-[10px] border border-[#D9D9D9] rounded-[2px] z-10 bg-themePrimary`}>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.83962 2.82086V1.78559C8.83962 1.69586 8.7365 1.6463 8.66685 1.70121L2.62935 6.41684C2.57805 6.45673 2.53655 6.50781 2.50799 6.56619C2.47944 6.62456 2.4646 6.68869 2.4646 6.75367C2.4646 6.81865 2.47944 6.88278 2.50799 6.94115C2.53655 6.99953 2.57805 7.05061 2.62935 7.0905L8.66685 11.8061C8.73783 11.861 8.83962 11.8115 8.83962 11.7218V10.6865C8.83962 10.6209 8.80882 10.5579 8.75792 10.5177L3.93649 6.75434L8.75792 2.98961C8.80882 2.94943 8.83962 2.88648 8.83962 2.82086Z"
          fill={`${
            className.includes("slick-disabled") ? "text-gray-600" : "black"
          }`}
        />
      </svg>
    </button>
  );
};

const CarouselNextBtn = (props: propsTypes) => {
  const { onClick, className } = props;
  return (
    <button
      aria-label="next-button"
      onClick={onClick}
      className={`absolute right-0 md:right-[-40px] top-[50%] translate-y-[-50%] p-[10px] border border-[#D9D9D9] rounded-[2px] z-10 bg-themePrimary`}>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.39777 6.41744L3.36027 1.70182C3.34449 1.6894 3.32553 1.68168 3.30557 1.67955C3.2856 1.67742 3.26544 1.68096 3.2474 1.68977C3.22936 1.69859 3.21417 1.71231 3.20357 1.72936C3.19298 1.74642 3.18741 1.76612 3.1875 1.78619V2.82146C3.1875 2.88709 3.2183 2.95003 3.2692 2.99021L8.09063 6.75494L3.2692 10.5197C3.21697 10.5599 3.1875 10.6228 3.1875 10.6884V11.7237C3.1875 11.8134 3.29063 11.863 3.36027 11.8081L9.39777 7.09245C9.44908 7.05242 9.4906 7.00121 9.51915 6.94273C9.5477 6.88425 9.56254 6.82003 9.56254 6.75494C9.56254 6.68986 9.5477 6.62564 9.51915 6.56716C9.4906 6.50868 9.44908 6.45747 9.39777 6.41744Z"
          fill={`${
            className.includes("slick-disabled") ? "text-gray-600" : "black"
          }`}
          fillOpacity="0.85"
        />
      </svg>
    </button>
  );
};

export { CarouselNextBtn, CarouselPreviousBtn };
