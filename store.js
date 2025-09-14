exports.handler = async (event) => {
  // Get data sent from frontend
  const data = JSON.parse(event.body);

  console.log("Received data:", data);

  // You can save this into a DB (Supabase, Firebase, MongoDB, etc.)
  // For now, just returning it back
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Location stored successfully!",
      latitude: data.latitude,
      longitude: data.longitude,
    }),
  };
};
