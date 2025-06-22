const WriteReviewPage = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Write a Review</h1>
      <form className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 mt-1 rounded"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Your Review</label>
          <textarea
            className="w-full border px-3 py-2 mt-1 rounded"
            rows={5}
            placeholder="Write your experience here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default WriteReviewPage;
