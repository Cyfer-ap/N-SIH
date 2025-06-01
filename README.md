# 🚀 N-SIH: NASA Space Insights Hub

N-SIH (NASA Space Insights Hub) is a modern, full-stack web application that visualizes data from NASA's public APIs — starting with the Astronomy Picture of the Day (APOD) module. The project is designed to be modular, responsive, and beautiful, with the ability to expand into additional datasets like Mars rover imagery, asteroid tracking, and exoplanet discoveries. This platform serves as both an educational and visual tool to help users, students, and space enthusiasts explore real-time and historical space data in an engaging and accessible way.

---

## 🌐 Live Demo

*(Coming soon — will be deployed via Vercel or Netlify)*

---

## 🔧 Tech Stack

| Layer           | Technology                              |
| --------------- | --------------------------------------- |
| Frontend        | Vite + React + CSS Modules              |
| Backend         | FastAPI (Python)                        |
| Styling         | Custom CSS (modern dark aesthetic)      |
| API Source      | [NASA Open APIs](https://api.nasa.gov/) |
| Version Control | Git + GitHub                            |

---

## 📸 Features

* 🌌 **Displays the latest Astronomy Picture of the Day (APOD):** Automatically fetches and displays high-resolution NASA images or videos updated daily. Supports both image rendering and embedded YouTube playback.

* 📖 **Detailed content presentation:** Shows the title, date, and a scientifically rich explanation of the image or video, as provided by NASA's astronomy team.

* 🧠 **Responsive layout and adaptive design:** Fully responsive and mobile-friendly layout ensures accessibility and usability across all screen sizes, including phones, tablets, and desktops.

* 🎨 **Space-themed dark aesthetic:** Designed with a clean and classy interface featuring dark gradients, neon accents, and well-balanced typography inspired by astronomical visuals.

* 🧩 **Modular structure:** Built to scale. Every feature is modularized, making it easy to add new NASA data endpoints such as Mars Rover imagery, Earth satellite views (EPIC), asteroid trackers, and more.

* ⚙️ **Lightweight and fast:** Powered by Vite and React for blazing-fast development and near-instant hot reloading.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Cyfer-ap/N-SIH.git
cd N-SIH
```

### 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt

# Create a .env file and add your NASA API key
echo NASA_API_KEY=DEMO_KEY > .env

# Run the FastAPI server
uvicorn main:app --reload
```

### 3. Frontend Setup (React + Vite + CSS Modules)

```bash
cd ../frontend_cssmodules
npm install
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
N-SIH/
├── backend/             # FastAPI app
│   └── main.py, .env, routes/
├── frontend_cssmodules/ # Vite + React + CSS Modules UI
│   └── src/, App.jsx, App.module.css
└── README.md
```

---

## 💡 TODOs

* [ ] Add Mars Rover image explorer
* [ ] Implement EPIC (Earth real-time satellite imagery)
* [ ] Add date picker for past APODs
* [ ] Deploy via Vercel / Render
* [ ] Setup GitHub Actions for CI/CD
* [ ] Add global loading indicators and error handling UI
* [ ] Integrate bookmarking or image download features

---

## 🤝 Contributing

Pull requests are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add something"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

We follow standard GitHub Flow. If you're not sure how to contribute, feel free to open an issue and discuss ideas.

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

## 📡 Credits

* [NASA API](https://api.nasa.gov/) — for making real space data freely available
* Designed and built by [@Cyfer-ap](https://github.com/Cyfer-ap)

---
