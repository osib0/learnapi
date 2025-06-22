import { Suspense } from "react";
import { ApiEndpointView } from "@/components/api-endpoint-view";
import { getApiEndpoint } from "@/lib/api-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    category: string;
    endpoint: string;
  };
}

function EndpointContent({ params }: PageProps) {
  const apiEndpoint = getApiEndpoint(params.category, params.endpoint);

  if (!apiEndpoint) {
    notFound();
  }

  return <ApiEndpointView endpoint={apiEndpoint} />;
}

export default function EndpointPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="p-6">Loading endpoint...</div>}>
      <EndpointContent params={params} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  // Generate all possible combinations of category and endpoint
  const paths: { category: string; endpoint: string }[] = [];

  // Import the API categories data
  const { apiCategories } = await import("@/lib/api-data");

  apiCategories.forEach((category) => {
    category.endpoints.forEach((endpoint) => {
      paths.push({
        category: category.id,
        endpoint: endpoint.id,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const apiEndpoint = getApiEndpoint(params.category, params.endpoint);

  if (!apiEndpoint) {
    return {
      title: "API Endpoint Not Found - LearnAPI",
    };
  }

  return {
    title: `${apiEndpoint.title} - LearnAPI Explorer`,
    description: apiEndpoint.description,
  };
}
