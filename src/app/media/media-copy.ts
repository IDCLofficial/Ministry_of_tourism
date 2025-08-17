import {events} from "../events/eventsList-copy"

interface MediaItem {
    image: string;
    title: string;
    isVideo?: boolean;
}

const eventsImage = events.map(event => {
    return {
        image: event.img,
        title: event.title,
        isVideo: false
    }
})

export const mediaItems: MediaItem[] = [
    ...eventsImage,
   {
    image: "/images/gallery/yoruba.jpg",
    title: "Yoruba Community In Imo State Showcase Cultural Heritage: Marks 'Amala Day'. As Commissioner For Tourism, Hospitality And Culture, Barr. Jerry Egemba Grace Occasion.",
    isVideo: true
   }
];

