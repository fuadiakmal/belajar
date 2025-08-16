export function withMetadata(title) {
  return async function generateMetadata(_, parent) {
    const parentMetadata = await parent;
    return {
      title,
      openGraph: {
        ...parentMetadata.openGraph,
        title,
      },
      twitter: {
        ...parentMetadata.twitter,
        title,
      },
    };
  };
}
