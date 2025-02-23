const mediaItems = {
    "ParsRoyal": [
        { type: 'image', src: 'images/projects/parsroyal/pr_1.png' },
        { type: 'image', src: 'images/projects/parsroyal/pr_2.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_3.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_4.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_5.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_6.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_7.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_8.jpeg' },
        { type: 'image', src: 'images/projects/parsroyal/pr_9.jpeg' },
    ],
    "MyClinic": [
        { type: 'image', src: 'images/projects/myclinic/mc_1.png' },
     ],
    "ClubsApp": [
        { type: 'video', src: 'files/ca_1_sign_up.mp4' },
        { type: 'video', src: 'files/ca_2_add_caard_conflict_view_offers.mp4' },
        { type: 'video', src: 'files/ca_3_no_club_offers.mp4' },
    ],
};

let currentExperience = null;
let currentMediaIndex = 0;

function openModal(experience, index) {
    currentExperience = experience;
    currentMediaIndex = index;
    showMedia();
    document.getElementById("previewModal").style.display = "flex";
}

function showMedia() {
    if (!currentExperience) return;

    const media = mediaItems[currentExperience][currentMediaIndex];
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = media.type === 'image'
        ? `<img src="${media.src}" alt="Preview" class="expanded-view">`
        : `<video controls autoplay class="expanded-view"><source src="${media.src}" type="video/mp4"></video>`;
}

function navigateMedia(direction) {
    if (!currentExperience) return;

    const mediaList = mediaItems[currentExperience];
    currentMediaIndex = (currentMediaIndex + direction + mediaList.length) % mediaList.length;
    showMedia();
}

function closeModal() {
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = "";
    document.getElementById("previewModal").style.display = "none";
    currentExperience = null;
}
