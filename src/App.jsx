import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Rating,
  Stack,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import "./App.css";
// ✅ Phone models list
const phoneModels = [
  "Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)",
  "Samsung Galaxy M31 Prime Edition (Ocean Blue, 6GB RAM, 128GB Storage)",
  "Vivo Y91i (Black, 3GB RAM, 32GB Storage)",
  "Samsung Galaxy M51 (Electric Blue, 8GB RAM, 128GB Storage)",
  "Samsung Galaxy M51 (Celestial Black, 8GB RAM, 128GB Storage)",
  "Samsung Galaxy M21 (Iceberg Blue, 4GB RAM, 64GB Storage)",
  "Samsung Galaxy M01 (Black, 3GB RAM, 32GB Storage)",
  "Samsung Galaxy M21 (Midnight Blue, 6GB RAM, 128GB Storage)",
  "Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)",
  "Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)",
  "Samsung Galaxy M31 Prime Edition (Iceberg Blue, 6GB RAM, 128GB Storage)",
  "Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)",
  "Samsung Galaxy M01 Core (Black, 2GB RAM, 32GB Storage)",
  "OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)",
  "OnePlus Nord 5G (Gray Ash, 12GB RAM, 256GB Storage)",
  "OnePlus Nord 5G (Gray Onyx, 6GB RAM, 64GB Storage)",
  "OnePlus 8 5G (Glacial Green 6GB RAM+128GB Storage)",
  "OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)",
  "OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)",
  "OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)",
  "OnePlus 8 5G (Onyx Black 12GB RAM+256GB Storage)",
  "OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage)",
  "Samsung Galaxy M21 (Blue, 4GB RAM, 64GB Storage))",
  "OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)",
  "OnePlus 8 5G (Glacial Green 8GB RAM+128GB Storage)",
  "OnePlus 5 (Slate Gray 8GB RAM + 128GB Memory)",
  "OnePlus 6T McLaren Limited Edition (Speed Orange, 10GB RAM,256GB Storage)",
  "OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage)",
  "OPPO A5 2020 (Mirror Black, 3GB RAM, 64GB Storage)",
  "Oppo A52 (Twilight Black, 6GB RAM, 128GB Storage)",
  "OPPO F17 Pro (Magic Blue, 8GB RAM, 128GB Storage)",
  "Oppo F17 (Dynamic Orange, 6GB RAM, 128GB Storage)",
  "Samsung Galaxy M21 (Blue, 4GB RAM, 64GB Storage)",
  "OPPO A5S (Black, 3GB RAM, 32GB Storage)",
  "OPPO Find X2 (Ocean, 12GB RAM, 256GB Storage)",
  "OPPO A1K (Black, 2GB RAM, 32GB Storage)",
  "OPPO Reno4 Pro (Starry Night, 8GB RAM, 128GB Storage)",
  "OPPO A31 (Mystery Black, 4GB RAM, 64GB Storage)",
  "Samsung Galaxy A30s (Prism Crush White, 4GB RAM and 128GB)",
  "OPPO A5 2020 (Mirror Black, 4GB RAM, 128GB Storage)",
  "OPPO A52 (Stream White, 8GB RAM, 128GB Storage)",
  "Oppo F17 (Classic Silver, 6GB RAM, 128GB Storage)",
  "OPPO A92020 (Space Purple, 8GB RAM, 128GB Storage)",
  "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
  "OPPO A9 2020 (Space Purple, 4GB RAM, 128GB Storage)",
  "OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage)",
  "MI Poco M2 (Slate Blue, 6GB RAM, 64GB Storage)",
  "MI Poco M2 (Pitch Black, 6GB RAM, 64GB Storage)",
  "MI Poco M2 Pro (Green and Greener, 6GB RAM, 64GB Storage)",
  "Mi 10 (Twilight Grey, 8GB RAM, 256GB Storage)",
  "Mi 10 (Coral Green, 8GB RAM, 128GB Storage)",
  "Mi 10 (Twilight Grey, 8GB RAM, 128GB Storage)",
  "Mi 10 (Coral Green, 8GB RAM, 256GB Storage)",
  "Mi Redmi 8 Phone (Sapphire Blue, 4GB RAM, 64GB Storage))",
  "Samsung Galaxy M51 (Celestial Black, 6GB RAM, 128GB Storage)",
  "Mi Phone Redmi 8 (Emerald Green, 4GB RAM, 64GB Storage)",
  "Mi Redmi 8 Ruby Red, 4GB RAM, 64GB Storage Smartphone",
  "Mi Redmi 8 Smartphone (Onyx Black, 4GB RAM, 64GB Storage)",
  "Mi Xiaomi MI Redmi Note 7S 4GB/64 GB Moonlight White Smartphone",
  "Xiaomi Redmi 6 Pro (Rose Gold, 3GB RAM, 32GB Storage)",
  "Mi Redmi Go (Blue, 16 GB) (1 GB RAM)",
  "Mi Redmi Note 7S (Ruby Red, 32GB, 3GB RAM)",
  "Mi Redmi Note 7S Smartphone (Onyx Black, 32 GB, 3 GB RAM)",
  "Mi Redmi -Note 7S (Onyx Black, 64GB, 4GB RAM)",
  "Mi Redmi -Note 7S (Sapphire Blue, 64GB, 4GB RAM)",
  "Samsung Galaxy M31s (Mirage Black, 6GB RAM, 128GB Storage)",
  "Redmi Note 5 Pro (Rose Gold, 6GB RAM, 64GB Storage)",
  "Redmi 6 (Black, 3GB RAM, 64GB Storage)",
  "Apple iPhone 8 (128GB) - Gold",
  "Apple iPhone 11 Pro Max (512GB) - Space Grey",
  "Apple iPhone 11 Pro Max (512GB) - Gold",
  "Apple iPhone 11 (64GB) - White",
  "Apple iPhone 11 (128GB) - White",
  "Apple iPhone 11 (128GB) - Green",
  "Apple iPhone 11 Pro Max (64GB) - Gold",
  "Apple iPhone 11 (64GB) - Black",
  "Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)",
  "Apple iPhone 11 (128GB) - Black",
  "Apple iPhone 11 (64GB) - (Product) RED",
  "Apple iPhone 11 (128GB) - Purple",
  "Apple iPhone 11 Pro Max (64GB) - Space Grey",
  "Apple iPhone Xs Max (64GB) - Gold",
  "Apple iPhone XS (512GB) - Space Grey",
  "Apple iPhone X (256GB) - Space Grey",
  "Apple iPhoneÂ 7 (32GB) - Rose Gold",
  "Vivo Y20 (Obsidian Black, 4GB RAM, 64GB Storage)",
  "Vivo Y20i (Nebula Blue, 3GB RAM, 64GB Storage)",
  "Samsung Galaxy M31 (Black, 6GB RAM, 128GB Storage)",
  "Vivo V19 (Piano Black, 8GB RAM, 256GB Storage)",
  "Vivo S1 (Skyline Blue, 6GB RAM, 64GB Storage)",
  "Vivo S1 Pro (Jazzy Blue, 8GB RAM, 128GB Storage)",
  "Vivo Y50 (Iris Blue, 8GB RAM, 128GB Storage)",
];

// ✅ Brand list
const brands = ["Samsung", "Apple", "MI", "One Plus", "VIVO", "OPPO"];

export default function ReviewForm() {
  const [selectedModel, setSelectedModel] = useState("");
  const [brand, setBrand] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(3);

  // 🔄 Auto-detect brand
  const handleModelChange = (event, newValue) => {
    setSelectedModel(newValue);
    if (newValue) {
      const detectedBrand = brands.find((b) =>
        newValue.toLowerCase().startsWith(b.toLowerCase())
      );
      if (detectedBrand) setBrand(detectedBrand);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      Brand: brand,
      Model: selectedModel,
      comment: comment,
      stars: stars,
    };

    fetch("/your-backend-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => alert("Review submitted!"))
      .catch(() => alert("Submission failed!"));
  };

  return (
    <Box className="glass-box"
  sx={{
    maxWidth: 600, // <-- Change width here
    width: "90%",   // optional: responsive width
    mx: "auto",
    p: 3,
    bgcolor: "#fff",
    borderRadius: 3,
    boxShadow: 3,
  }}


    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Write a Phone Review
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {/* ✅ Model Dropdown */}
          <Autocomplete
            options={phoneModels}
            value={selectedModel}
            onChange={handleModelChange}
            renderInput={(params) => (
              <TextField {...params} label="Select Phone Model" required />
            )}
          />

          {/* ✅ Brand Dropdown */}
          <FormControl fullWidth required>
            <InputLabel>Brand</InputLabel>
            <Select
              value={brand}
              label="Brand"
              onChange={(e) => setBrand(e.target.value)}
            >
              {brands.map((b) => (
                <MenuItem key={b} value={b}>
                  {b}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* ✅ Review Text */}
          <TextField
            label="Your Review"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            placeholder="Write your thoughts about this phone..."
          />

          {/* ✅ Star Rating */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 2 }}>Stars:</Typography>
            <Rating
              name="stars"
              value={stars}
              onChange={(e, val) => setStars(val)}
              max={5}
              size="large"
              required
            />
          </Box>

          {/* ✅ Submit */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit Review
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
