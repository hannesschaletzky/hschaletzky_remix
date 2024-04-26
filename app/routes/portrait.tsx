import ContactIcons from "~/components/contactIcons";
import { calculateAge } from "~/utils";

export default function Portrait() {
  const age = calculateAge();

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:text-center p-6">
      {/* key points */}
      <div className="w-full">{"/ / "}Hannes Schaletzky</div>
      <div className="w-full">
        {"> "}2018 B.Sc. business informatics <mark>university</mark> graduate
      </div>
      <div className="w-full">
        {"> "}German, {age} years old
      </div>
      <div className="w-full">
        {"> "}former coding camp <mark>teacher</mark>
      </div>
      {/* image */}
      <div className="mt-8 mb-8 w-44 h-44">
        <img
          rel="preload"
          className="rounded-full w-full h-full object-cover"
          src="/hannes2.png"
          alt="hannes"
        />
      </div>
      {/* values */}
      <div className="w-full text-center">
        core <mark>values</mark>
      </div>
      <div>{"> "}focus on impact</div>
      <div>{"> "}take ownership</div>
      <div>{"> "}open by default</div>
      <br />
      {/* believes */}
      <div className="w-full text-center">
        guiding <mark>beliefs</mark>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <div>&quot;honest communication is the best motivation&quot;</div>
        <div>
          &quot;regularly switching contexts heavily decreases
          productivity&quot;
        </div>
        <div>&quot;ad-hoc meetings are the most effective ones&quot;</div>
        <div>
          &quot;project stagnation will not be resolved by following the agile
          approach more strictly&quot;
        </div>
        <div>
          &quot;written async project/company updates are underrated&quot;
        </div>
      </div>
      <br />
      {/* social work */}
      <div className="w-full text-center">
        <mark>social</mark> work
      </div>
      <div>
        {"> "}chairman for student initative{" "}
        <a
          href="https://www.uni-augsburg.de/de/fakultaet/fai/informatik/fur-studierende/studiengange-informatik-bachelor/wirtschaftsinformatik-bsc/community/#DasZeichnetUnsAus"
          target="_blank"
          rel="noreferrer"
        >
          <u>WINitiative</u>
        </a>
      </div>
      <div>
        {"> "}
        <a href="https://www.erasmusplus.de/" target="_blank" rel="noreferrer">
          <u>Erasmus</u>
        </a>{" "}
        tutor for a US student
      </div>
      <div>
        {"> "}
        <a href="https://www.joblinge.de/" target="_blank" rel="noreferrer">
          <u>Joblinge</u>
        </a>{" "}
        mentor in Berlin
      </div>
      <br />

      {/* interesting things */}
      <div className="w-full text-center">
        leisure <mark>interests</mark>
      </div>
      <div>
        {"> "}beach volleyball, weight training, cycling, skiing (official ski
        instructor)
      </div>
      <div>{"> "}sustainability, self-development, nutrition</div>
      <div>{"> "}private (coding) projects, YouTube 😇</div>
      <br />

      <ContactIcons />
      <a
        href="/"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Back
      </a>
    </div>
  );
}
