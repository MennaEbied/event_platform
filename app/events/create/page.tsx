import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import { redirect } from "next/navigation";

export default function CreateEventPage() {
  async function createEventAction(formData: FormData) {
    "use server";

    await connectDB();

    const rawFormData = {
      title: formData.get("title"),
      description: formData.get("description"),
      overview: formData.get("overview"),
      image: formData.get("image"),
      venue: formData.get("venue"),
      location: formData.get("location"),
      date: formData.get("date"),
      time: formData.get("time"),
      mode: formData.get("mode"),
      audience: formData.get("audience"),
      organizer: formData.get("organizer"),
      agenda: formData
        .get("agenda")
        ?.toString()
        .split(",")
        .map((s) => s.trim()),
      tags: formData
        .get("tags")
        ?.toString()
        .split(",")
        .map((s) => s.trim()),
    };

    const newEvent = await Event.create(rawFormData);
    redirect(`/events/${newEvent.slug}`);
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Create New Event</h2>
      <form action={createEventAction} className="grid grid-cols-1 gap-6">
        <input
          name="title"
          placeholder="Event Title"
          className="border p-3 rounded-lg shadow-sm"
          required
        />
        <textarea
          name="description"
          placeholder="Full Description"
          className="border p-3 rounded-lg shadow-sm h-32"
          required
        />
        <textarea
          name="overview"
          placeholder="Short Overview"
          className="border p-3 rounded-lg shadow-sm h-20"
          required
        />
        <input
          name="image"
          placeholder="Image URL (e.g. https://...)"
          className="border p-3 rounded-lg shadow-sm"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="venue"
            placeholder="Venue (e.g. ITI Mansoura)"
            className="border p-3 rounded-lg shadow-sm"
            required
          />
          <input
            name="location"
            placeholder="City (e.g. Mansoura, Egypt)"
            className="border p-3 rounded-lg shadow-sm"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="date"
            type="date"
            className="border p-3 rounded-lg shadow-sm"
            required
          />
          <input
            name="time"
            type="time"
            className="border p-3 rounded-lg shadow-sm"
            required
          />
        </div>

        <select name="mode" className="border p-3 text-white bg-black rounded-lg shadow-sm" required>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <input
          name="audience"
          placeholder="Target Audience"
          className="border p-3 rounded-lg shadow-sm"
          required
        />
        <input
          name="organizer"
          placeholder="Organizer Name"
          className="border p-3 rounded-lg shadow-sm"
          required
        />
        <input
          name="agenda"
          placeholder="Agenda (comma separated items)"
          className="border p-3 rounded-lg shadow-sm"
          required
        />
        <input
          name="tags"
          placeholder="Tags (comma separated)"
          className="border p-3 rounded-lg shadow-sm"
          required
        />

        <button
          type="submit"
          className="bg-emerald-700 text-white py-4 rounded-lg font-bold hover:bg-emerald-600 transition"
        >
          Publish Event
        </button>
      </form>
    </section>
  );
}
