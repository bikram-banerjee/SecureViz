import { Accordion } from "flowbite-react";

export const AboutUs = () => {
  return (
    <div className="w-full h-auto flex flex-col place-items-center bg-custom-dark">
      <div className="text-5xl p-5 font-bold text-custom-light-cyan">About Us</div>
      <div className="text-xl p-5 font-medium text-custom-whitish">
        Welcome to SecureViz, a Data Visualization Platform with User Access
        Control!
      </div>
      <Accordion className="w-[90%]">
        <Accordion.Panel >
          <Accordion.Title >Our Mission</Accordion.Title>
          <Accordion.Content>
            <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400">
              Our mission is to empower organizations by delivering a
              sophisticated data visualization platform that enhances data
              analysis while upholding the highest standards of data security.
              We strive to simplify the exploration and understanding of data
              through interactive and dynamic visualizations, while enforcing
              stringent access controls to safeguard sensitive information.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title  >What We Offer</Accordion.Title>
          <Accordion.Content>
            <ul className="list-disc pl-5 text-custom-whitish dark:text-gray-400">
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Advanced Data Visualization:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Our platform supports a variety of chart types and
                    interactive dashboards, enabling users to gain deeper
                    insights from their data. From bar and line charts to pie
                    and scatter plots, we provide the tools to visualize data in
                    meaningful ways.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Role-Based Access Control:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Securely manage data access with role-based permissions.
                    Whether youre an administrator, analyst, or viewer, our
                    platform ensures that each user has appropriate access
                    levels and can only interact with data theyre authorized to
                    see.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Interactive Features:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Explore data with advanced filtering, sorting, and
                    drill-down capabilities. Our interactive dashboards allow
                    users to customize their views and focus on specific data
                    points.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold">
                  Secure User Authentication:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Our platform offers secure authentication methods, including
                    multi-factor authentication (MFA), to ensure that only
                    authorized users can access the system.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Data Privacy Measures:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    We implement data masking and anonymization techniques to
                    protect sensitive information while maintaining the
                    integrity of data visualizations.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Audit Logging:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Track and monitor user activities with comprehensive audit
                    logs. This feature helps ensure accountability and provides
                    insights into how data is accessed and utilized.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Scalability:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Our platform is designed to handle large datasets
                    efficiently, ensuring smooth performance even as your data
                    grows.
                  </span>
                </p>
              </li>
              <li>
                <p className="text-custom-whitish dark:text-gray-400 font-bold ">
                  Data Integration:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    We support a wide range of data sources, making it easy to
                    connect and visualize data from various systems and formats.
                  </span>
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title >Why Choose SecureViz?</Accordion.Title>
          <Accordion.Content>
            <ul className="list-disc pl-5 text-custom-whitish dark:text-gray-400">
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Enhanced Security:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Our platform is designed with stringent access controls and
                    security measures to protect sensitive data from
                    unauthorized access.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Comprehensive Visualization Tools:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Gain insights from your data with a range of interactive and
                    customizable visualization options.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  User-Friendly Experience:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Designed with an intuitive interface, our platform ensures
                    ease of use for all users, regardless of their technical
                    expertise.
                  </span>
                </p>
              </li>
              <li>
                <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400 font-bold ">
                  Reliable Performance:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    We provide accurate, real-time data visualizations that you
                    can depend on for critical decision-making.
                  </span>
                </p>
              </li>
              <li>
                <p className=" text-custom-whitish dark:text-gray-400 font-bold ">
                  Expert Support:
                  <span className="mt-2 mb-2 ml-2 text-custom-whitish dark:text-gray-400 font-normal">
                    Our dedicated team offers comprehensive training and support
                    to ensure you get the most out of our platform.
                  </span>
                </p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title >Our Vision</Accordion.Title>
          <Accordion.Content>
            <p className="mt-2 mb-2 text-custom-whitish dark:text-gray-400">
              We envision a future where organizations can seamlessly explore
              and understand their data without compromising on security. By
              combining powerful data visualization tools with robust user
              access controls, we are leading the way towards a smarter, more
              secure approach to data analysis.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
