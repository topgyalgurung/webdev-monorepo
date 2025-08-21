
# Ollama

Ollama exposes an **HTTP API** on `localhost`.

- If Ollama is already running as a desktop application, it will be running in the background.
- If not, start it manually:
  
```bash
ollama serve
# Default PORT: 11434
```

### create virtual env 
- python3 -m venv venv
- source venv/bin/activate 
- pip3 install ollama


#### customize model 
- create Makefile 
- set temperature parameter, system message ..
- then create model running
  - $ ollama create model-name -f Makefile
- to use the model:
  - $ ollama run model-name 
- to remove it
  - $ ollama rm model-name 