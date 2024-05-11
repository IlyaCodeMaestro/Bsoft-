import PropTypes from "prop-types";

export const TeamAccordion2 = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <hr />
          <div
            style={{
              height: "190px",
              flexDirection: item.reverse == true ? "row-reverse" : "row",
            }}
            className="flex items-center overflow-hidden transition-all duration-700 w-full text-start md:px-4 focus:outline-none gap-2 p-2 md:p-10 my-10"
          >
            <div
              style={{
                alignItems: item.reverse ? "end" : "start",
                textAlign: item.reverse ? "end" : "start",
                transform: "translateY(0px)",
              }}
              className="w-full flex mt-5 flex-col justify-between gap-2"
            >
              <h4 className="lg:font-bold text-sm md:text-lg ">{item.name}</h4>
              <p className="md:text-sm lg:text-lg">{item.role}</p>
              <p
                style={{
                  opacity: "1",
                }}
                className="w-full md:w-1/2 transition-all duration-700 text-xs lg:text-lg"
              >
                {item.text}
              </p>
            </div>
            {item.img && (
              <img
                src={item.img}
                className=" lg:flex rounded-[10px] object-cover transition-all duration-500"
                style={{
                  height: "190px",
                }}
              />
            )}
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

TeamAccordion2.propTypes = {
  list: PropTypes.array,
};
