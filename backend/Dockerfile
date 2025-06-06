# Use a lightweight Python base image
FROM python:3.12.3-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the dependencies file into the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application source code (including app.py and src/)
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Run the FastAPI app using uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]