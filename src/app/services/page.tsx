import { Metadata } from "next";
import ServicesPage from "./services-client";

export const metadata: Metadata = {
  title: "Services | LuminoidX",
  description: "Explore our full range of services — AI Agent Development, Workflow Automation, API Integration, Web & Mobile Development, and Quality Assurance.",
};

export default function Page() {
  return <ServicesPage />;
}
