useEffect(() => {
    const fetchPosts = async () => {
            const response = await axios.get("http://localhost:4000/fetchPosts");
            const sanitizedPosts = response.data.map(post => {
                return {
                    postImage: sanitizedPostImage
                };
            });

            dispatch(timelinePosts(sanitizedPosts)); 
    };

    fetchPosts();
}, [dispatch]);
// In this example, we're using the useEffect hook to perform a fetch operation for posts when the component mounts or when the dispatch function changes.

// Encapsulation of Logic:

// The fetchPosts function is defined within the useEffect callback. This encapsulates the logic for fetching posts within the effect. Encapsulation helps in organizing and isolating code related to a specific functionality, making it easier to manage and maintain.
// By encapsulating the logic within the effect, you ensure that the fetch operation is tightly coupled with the effect itself. This means that the fetch logic is executed only when the effect is triggered (i.e., when the component mounts or when the dispatch function changes).
// Execution Trigger:

// The fetchPosts function is called immediately within the useEffect callback. This ensures that the fetch operation is initiated as soon as the effect is triggered (i.e., when the component mounts).
// By specifying fetchPosts within the effect, you ensure that the fetch operation is performed at the appropriate time, specifically when the effect is triggered. This prevents unnecessary fetches and ensures that the operation is executed only when needed.