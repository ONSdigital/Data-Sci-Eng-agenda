const allDayPosterSession = {
  id: "poster-stands",
  time: "9:00 AM",
  end: "4:00 PM",
  allDay: true,
  roomIds: ["room-103"],
  roomName: "Room 103",
  track: "Poster",
  title: "Poster stands",
  speaker: "Open throughout the programme",
};

const sessions = [
  { id: "coffee-networking", time: "9:00 AM", end: "10:15 AM", roomIds: ["room-101", "room-102"], roomName: "Rooms 101 & 102", track: "Networking", title: "Coffee and networking", speaker: "" },
  { id: "keynote-lisa-allen", time: "10:15 AM", end: "11:15 AM", roomIds: ["room-101"], roomName: "Room 101", track: "Keynote", title: "Keynote speaker", speaker: "Lisa Allen · Director of Data Services, The Pensions Regulator" },
  { id: "coffee-break", time: "11:15 AM", end: "11:30 AM", roomIds: ["room-101", "room-102"], roomName: "Rooms 101 & 102", track: "Break", title: "Coffee break", speaker: "", kind: "break" },
  { id: "ryan-schofield", time: "11:30 AM", end: "11:50 AM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "Changing a question", speaker: "Ryan Schofield" },
  { id: "jay-rowe", time: "11:30 AM", end: "11:50 AM", roomIds: ["room-102"], roomName: "Room 102", track: "Talk", title: "CAP", speaker: "Jay Rowe" },
  { id: "harry-stott", time: "11:50 AM", end: "12:10 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "A tool for secondary disclosure", speaker: "Harry Stott" },
  { id: "ed-cuss", time: "11:50 AM", end: "12:10 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Talk", title: "Ports & Adapters", speaker: "Ed Cuss" },
  { id: "alex-westwood", time: "12:10 PM", end: "12:30 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "Mapping healthcare", speaker: "Alex Westwood" },
  { id: "adebola-onanuga", time: "12:10 PM", end: "12:30 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Talk", title: "Online job ads", speaker: "Adebola Onanuga" },
  { id: "marc-sarazin", time: "12:30 PM", end: "12:50 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "ONS AI Coding Toolkit", speaker: "Marc Sarazin" },
  { id: "thomas-pearson", time: "12:30 PM", end: "12:50 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Talk", title: "Quality only exists when observed", speaker: "Thomas Pearson" },
  { id: "lunch", time: "12:50 PM", end: "2:00 PM", roomIds: ["room-101", "room-102"], roomName: "Rooms 101 & 102", track: "Break", title: "Lunch", speaker: "", kind: "break" },
  { id: "laurie-thraves", time: "2:00 PM", end: "2:40 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "Guest speaker", speaker: "Laurie Thraves · Situation Centre, Cabinet Office" },
  { id: "lizzie-hull", time: "2:00 PM", end: "2:10 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Lizzie Hull", speaker: "Lightning talk" },
  { id: "george-zorinyants", time: "2:10 PM", end: "2:20 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "George Zorinyants", speaker: "Lightning talk" },
  { id: "amanda-baizan-edge", time: "2:20 PM", end: "2:30 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Amanda Baizan Edge", speaker: "Lightning talk" },
  { id: "aditya-humnabadkar", time: "2:30 PM", end: "2:40 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Aditya Humnabadkar", speaker: "Lightning talk" },
  { id: "anne-griffiths", time: "2:40 PM", end: "3:00 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "IABS processing", speaker: "Anne Griffiths" },
  { id: "dan-harris", time: "2:40 PM", end: "2:50 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Dan Harris", speaker: "Lightning talk" },
  { id: "kenechi-omeke", time: "2:50 PM", end: "3:00 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Kenechi Omeke", speaker: "Lightning talk" },
  { id: "dan-shiloh", time: "3:00 PM", end: "3:20 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "Bad requirements", speaker: "Dan Shiloh" },
  { id: "matt-wray", time: "3:00 PM", end: "3:10 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Matt Wray", speaker: "Lightning talk" },
  { id: "lucy-collyer", time: "3:10 PM", end: "3:20 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Lucy Collyer", speaker: "Lightning talk" },
  { id: "afternoon-break", time: "3:20 PM", end: "3:30 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Break", title: "Break", speaker: "", kind: "break" },
  { id: "patrycja-delong-smith", time: "3:20 PM", end: "3:30 PM", roomIds: ["room-102"], roomName: "Room 102", track: "Lightning talk", title: "Patrycja Delong-Smith", speaker: "Lightning talk" },
  { id: "learning-pathways", time: "3:30 PM", end: "4:00 PM", roomIds: ["room-101"], roomName: "Room 101", track: "Talk", title: "Learning pathways", speaker: "Craig & Michaela" },
];

const schedule = document.querySelector("#schedule");
const searchInput = document.querySelector("#searchInput");
const savedCount = document.querySelector("#savedCount");
let selectedTrack = "all";
let selectedRoom = "all";
let savedSessions = new Set();

try {
  savedSessions = new Set(JSON.parse(localStorage.getItem("data-sci-eng-saved-sessions") || "[]"));
} catch {
  savedSessions = new Set();
}

function makeIcon(name) {
  const element = document.createElement("i");
  element.dataset.lucide = name;
  return element;
}

function renderSession(session) {
  const card = document.createElement("article");
  card.className = `session-card${session.kind === "break" ? " break-card" : ""}${savedSessions.has(session.id) ? " saved" : ""}${selectedRoom === "all" && session.id === "laurie-thraves" ? " guest-speaker-long" : ""}${selectedRoom === "all" && session.id === "anne-griffiths" ? " iabs-session-long" : ""}${selectedRoom === "all" && session.id === "dan-shiloh" ? " bad-requirements-long" : ""}`;

  const main = document.createElement("div");
  main.className = "session-main";
  const meta = document.createElement("div");
  meta.className = "session-meta";
  if (!session.allDay) {
    const sessionTime = document.createElement("span");
    sessionTime.className = "session-time";
    sessionTime.textContent = `${session.time}–${session.end}`;
    meta.append(sessionTime);
  }
  const room = document.createElement("span");
  room.className = `room-tag ${session.roomIds.length > 1 ? "shared" : session.roomIds[0]}`;
  room.textContent = session.roomName;
  const track = document.createElement("span");
  track.className = "track-tag";
  track.textContent = session.track;
  meta.append(room, track);

  const title = document.createElement("h3");
  title.textContent = session.title;
  main.append(meta, title);
  if (session.speaker) {
    const speaker = document.createElement("p");
    speaker.className = "speaker";
    speaker.textContent = session.speaker;
    main.append(speaker);
  }
  card.append(main);

  if (session.roomIds.length === 1 && session.roomIds[0] !== "room-103") {
    const actions = document.createElement("div");
    actions.className = "session-actions";
    const save = document.createElement("button");
    save.className = `save-button${savedSessions.has(session.id) ? " saved" : ""}`;
    save.type = "button";
    save.setAttribute("aria-label", `${savedSessions.has(session.id) ? "Remove" : "Save"} ${session.title}`);
    save.setAttribute("aria-pressed", String(savedSessions.has(session.id)));
    save.title = savedSessions.has(session.id) ? "Remove from saved sessions" : "Save session";
    save.append(makeIcon("bookmark"));
    save.addEventListener("click", () => {
      if (savedSessions.has(session.id)) savedSessions.delete(session.id);
      else savedSessions.add(session.id);
      try { localStorage.setItem("data-sci-eng-saved-sessions", JSON.stringify([...savedSessions])); } catch { /* Saving still works for this visit. */ }
      renderAgenda();
    });
    actions.append(save);
    card.append(actions);
  }
  return card;
}

function matchesFilters(session, query) {
  const matchesRoom = selectedRoom === "all" || session.roomIds.includes(selectedRoom);
  const matchesTrack = selectedTrack === "all" || session.track === selectedTrack;
  const matchesQuery = `${session.title} ${session.speaker} ${session.track} ${session.roomName}`.toLowerCase().includes(query);
  return matchesRoom && matchesTrack && matchesQuery;
}

function renderAgenda() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleSessions = sessions.filter((session) => matchesFilters(session, query));
  const showPosters = matchesFilters(allDayPosterSession, query);
  schedule.replaceChildren();

  if (showPosters) {
    const allDay = document.createElement("section");
    allDay.className = "all-day-session";
    const rail = document.createElement("div");
    rail.className = "time-rail all-day-rail";
    const label = document.createElement("strong");
    label.textContent = "ALL DAY";
    const hours = document.createElement("span");
    hours.textContent = "9:00 AM–4:00 PM";
    rail.append(label, hours);
    const grid = document.createElement("div");
    grid.className = "slot-grid single-slot";
    grid.append(renderSession(allDayPosterSession));
    allDay.append(rail, grid);
    schedule.append(allDay);
  }

  if (!visibleSessions.length && !showPosters) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No sessions match those filters. Try another room, format, or search.";
    schedule.append(empty);
  } else {
    const grouped = visibleSessions.reduce((map, session) => {
      const afternoonTimes = ["2:00 PM", "2:10 PM", "2:20 PM", "2:30 PM"];
      const key = selectedRoom === "all" && afternoonTimes.includes(session.time)
        ? "2:00 PM"
        : selectedRoom === "all" && session.time === "2:50 PM" ? "2:40 PM"
        : selectedRoom === "all" && session.time === "3:10 PM" ? "3:00 PM" : session.time;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(session);
      return map;
    }, new Map());

    grouped.forEach((slotSessions, start) => {
      const group = document.createElement("section");
      group.className = `schedule-group${selectedRoom === "all" && start === "2:00 PM" ? " all-rooms-afternoon" : ""}`;
      const rail = document.createElement("div");
      rail.className = "time-rail";
      const startTime = document.createElement("strong");
      startTime.textContent = start;
      const endTime = document.createElement("span");
      const latestEnd = slotSessions.reduce((latest, session) => {
        const toMinutes = (value) => {
          const [clock, meridiem] = value.split(" ");
          let [hour, minute] = clock.split(":").map(Number);
          if (meridiem === "PM" && hour !== 12) hour += 12;
          if (meridiem === "AM" && hour === 12) hour = 0;
          return hour * 60 + minute;
        };
        return toMinutes(session.end) > toMinutes(latest) ? session.end : latest;
      }, slotSessions[0].end);
      endTime.textContent = `Until ${latestEnd}`;
      rail.append(startTime, endTime);
      const grid = document.createElement("div");
      grid.className = `slot-grid${slotSessions.length === 1 ? " single-slot" : ""}${selectedRoom === "all" && start === "2:00 PM" ? " all-rooms-afternoon" : ""}${selectedRoom === "all" && start === "2:40 PM" ? " all-rooms-late-afternoon" : ""}${selectedRoom === "all" && start === "3:00 PM" ? " all-rooms-final-talks" : ""}`;
      slotSessions.forEach((session) => grid.append(renderSession(session)));
      group.append(rail, grid);
      schedule.append(group);
    });
  }
  savedCount.textContent = savedSessions.size;
  window.lucide?.createIcons();
}

document.querySelectorAll(".track-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedTrack = chip.dataset.track;
    document.querySelectorAll(".track-chip").forEach((item) => item.classList.toggle("active", item === chip));
    renderAgenda();
  });
});

document.querySelectorAll(".room-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedRoom = chip.dataset.room;
    document.querySelectorAll(".room-chip").forEach((item) => item.classList.toggle("active", item === chip));
    renderAgenda();
  });
});

searchInput.addEventListener("input", renderAgenda);
renderAgenda();