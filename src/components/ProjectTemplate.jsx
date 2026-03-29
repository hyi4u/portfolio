import FillButton from "./FillButton";

export default function ProjectTemplate({
  proImg,
  title,
  date,
  tagsArray,
  websiteLink,
  CodeRepo,
  larger,
  codeState,
}) {
  return (
    <div
      className={`bg-primary/20 p-4 rounded-2xl flex flex-col gap-4 ${larger ? "md:col-span-2" : "col-span-1"} `}
    >
      <div className="px-4 pt-4 rounded-2xl bg-primary/50 ">
        <img
          className="w-full md:h-80 object-cover"
          src={proImg}
          alt="project image"
        />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="">{title}</h1>
        <p className="text-gray-300 text-lg">{date}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tagsArray.map((item) => (
          <span className="bg-primary/50 text-[#def5c3] font-bold px-2 py-1  rounded-2xl uppercase ">
            {item}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1">
        <FillButton className="capitalize col-span-2">
          <a
            className=""
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          open the website
        </FillButton>
        {codeState === "private" ? (
          <p className=" sm:text-xl col-span-2 pt-4 capitalize text-gray-300 border-b border-gray-300  w-fit">
            -the webiste is private. the code unavailable.
          </p>
        ) : (
          CodeRepo.map((item) =>
            item.link === false ? (
              <p className="sm:text-xl col-span-2 pt-4 capitalize text-gray-300 border-b border-gray-300  w-fit">
                 -{item.label}
              </p>
            ) : (
              <FillButton className="capitalize px-2!">
                {" "}
                <a
                  className=""
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}{" "}
                </a>
              </FillButton>
            ),
          )
        )}
      </div>
    </div>
  );
}
