const tools = [
  {
    name: "Maya Time Machine",
    category: "Production",
    icon: "assets/settings.png",
    version: "Maya 2020+",
    status: "P4 Ready",
    summary:
      "面向动画日常制作的 Maya 文件启动器和时间机器工具，集中处理最近文件、常用目录、版本回溯和 P4 文件状态。",
    tags: ["Launcher", "P4", "Animation", "PySide2"],
    features: [
      "支持 Maya 场景、FBX、anim、脚本文件的快速浏览和启动。",
      "提供 P4 edit、add、sync、revert、submit、status 等常用流程入口。",
      "可绑定 Alt+Space 快捷键，减少反复翻目录和手动 checkout 的操作。"
    ],
    command: `import maya_time_machine
maya_time_machine.show()`,
    path: "D:/Codex/maya/maya_time_machine/"
  },
  {
    name: "Bingo ToolBox",
    category: "Toolbox",
    icon: "assets/bingo-icon.png",
    version: "Maya 2020-2027",
    status: "Local Tool Library",
    summary:
      "个人 Maya 工具箱插件，用分类、收藏、快捷键和工具注册信息管理脚本，适合把零散 Python/MEL 工具集中起来。",
    tags: ["Toolbox", "Python", "MEL", "Shortcut"],
    features: [
      "内置动画、绑定、模型、特效、其他等分类。",
      "支持工具图标、收藏、快捷键注册和本地配置。",
      "已经按 Maya 2020 兼容方向整理，适合旧项目环境使用。"
    ],
    command: `// Drag this MEL file into Maya
D:/Codex/maya/Bingo_ToolBox_01/install.mel`,
    path: "D:/Codex/maya/Bingo_ToolBox_01/",
    download: "https://raw.githubusercontent.com/331908200-dotcom/Bingo-Tools/main/Bingo_ToolBox_Maya2020-2026_CustomMenu_Setup.exe"
  },
  {
    name: "Animcraft Pose Mirror",
    category: "Facial Rig",
    icon: "assets/python.png",
    version: "Maya Python",
    status: "Pose Tool",
    summary:
      "为 Animcraft 表情系统准备的控制器镜像工具，目标是复制当前 pose，并在目标帧镜像粘贴到对应左右控制器。",
    tags: ["Animcraft", "Facial", "Mirror", "Keyframe"],
    features: [
      "按 Left/Right 命名规则寻找对应控制器。",
      "可处理 Translate、Rotate 和部分自定义通道，例如 Blink、Blink Side、Socket Weight。",
      "适合制作表情 pose 对称检查和左右表情快速互换。"
    ],
    command: `exec(open(r"D:/Codex/maya/animcraft_pose_mirror_tool.py", "r").read())`,
    path: "D:/Codex/maya/animcraft_pose_mirror_tool.py"
  },
  {
    name: "Selected Ctrl Mirror",
    category: "Facial Rig",
    icon: "assets/python.png",
    version: "Maya Python",
    status: "Controller Utility",
    summary:
      "面向已选控制器的轻量镜像脚本，用来检查具体控制器的左右通道映射和镜像结果。",
    tags: ["Selection", "Controller", "Mirror"],
    features: [
      "只处理当前选中的控制器，便于定位单个控制器镜像异常。",
      "保留当前 Maya 场景上下文，不强制处理整套绑定。",
      "适合调试 Animcraft_Mouth_CtrlKey 等特殊控制器。"
    ],
    command: `exec(open(r"D:/Codex/maya/mirror_selected_animcraft_ctrls.py", "r").read())`,
    path: "D:/Codex/maya/mirror_selected_animcraft_ctrls.py"
  },
  {
    name: "Safe Skin Weight Mirror",
    category: "Skin",
    icon: "assets/mel.png",
    version: "Maya Native",
    status: "Skin Utility",
    summary:
      "基于 Maya 原生 copySkinWeights 思路的蒙皮权重镜像辅助脚本，用于在保存备份后尝试修复左右权重不一致。",
    tags: ["Skin", "Weights", "Mirror", "Rigging"],
    features: [
      "尽量调用 Maya 原生命令完成权重镜像，减少自定义计算带来的风险。",
      "适合在模型拓扑和骨骼命名基本对称时使用。",
      "执行前建议另存文件，并检查 influence 命名和蒙皮对象是否正确。"
    ],
    command: `exec(open(r"D:/Codex/maya/safe_maya_mirror_skin_weights.py", "r").read())`,
    path: "D:/Codex/maya/safe_maya_mirror_skin_weights.py"
  },
  {
    name: "Maya Install Helper",
    category: "Install",
    icon: "assets/shortcut.png",
    version: "Python",
    status: "Installer",
    summary:
      "用于注册 Maya Time Machine 等工具的安装入口，适合在新机器或新 Maya 版本中快速恢复工具菜单。",
    tags: ["Install", "Menu", "Shelf"],
    features: [
      "通过 Script Editor 执行安装脚本即可写入工具入口。",
      "适合跟随工具仓库一起发布，减少手动配置步骤。",
      "建议每个独立工具都保留一段可复制的启动命令。"
    ],
    command: `exec(open(r"D:/Codex/maya/install.py", "r").read())`,
    path: "D:/Codex/maya/install.py"
  }
];

const state = {
  category: "All",
  query: "",
  selected: tools[0].name
};

const toolGrid = document.getElementById("toolGrid");
const filterBar = document.getElementById("filterBar");
const detailPanel = document.getElementById("detailPanel");
const searchInput = document.getElementById("searchInput");
const toolCount = document.getElementById("toolCount");

toolCount.textContent = String(tools.length);

function getCategories() {
  return ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))];
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function getFilteredTools() {
  const query = normalize(state.query);
  return tools.filter((tool) => {
    const categoryMatch = state.category === "All" || tool.category === state.category;
    const haystack = normalize([
      tool.name,
      tool.category,
      tool.summary,
      tool.version,
      tool.status,
      ...tool.tags,
      ...tool.features
    ].join(" "));
    return categoryMatch && (!query || haystack.includes(query));
  });
}

function renderFilters() {
  filterBar.innerHTML = "";
  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter-button${state.category === category ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.addEventListener("click", () => {
      state.category = category;
      render();
    });
    filterBar.appendChild(button);
  });
}

function renderTools() {
  const filtered = getFilteredTools();
  toolGrid.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到匹配的工具";
    toolGrid.appendChild(empty);
    renderDetail(null);
    return;
  }

  if (!filtered.some((tool) => tool.name === state.selected)) {
    state.selected = filtered[0].name;
  }

  filtered.forEach((tool) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `tool-card${state.selected === tool.name ? " active" : ""}`;
    card.addEventListener("click", () => {
      state.selected = tool.name;
      render();
    });
    card.innerHTML = `
      <div class="tool-card-header">
        <img src="${tool.icon}" alt="">
        <div>
          <h3>${tool.name}</h3>
          <span class="status">${tool.status}</span>
        </div>
      </div>
      <p>${tool.summary}</p>
      <div class="tag-row">
        ${tool.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
    toolGrid.appendChild(card);
  });

  renderDetail(tools.find((tool) => tool.name === state.selected));
}

function renderDetail(tool) {
  if (!tool) {
    detailPanel.innerHTML = "";
    return;
  }

  detailPanel.innerHTML = `
    <p class="eyebrow">${tool.category}</p>
    <h2>${tool.name}</h2>
    <p>${tool.summary}</p>
    <div class="detail-meta">
      <span class="tag">${tool.version}</span>
      <span class="status">${tool.status}</span>
      ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <ul class="feature-list">
      ${tool.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <pre><code>${escapeHtml(tool.command)}</code></pre>
    <div class="detail-actions">
      <button class="copy-button" type="button" data-command="${escapeAttribute(tool.command)}">Copy Command</button>
      ${tool.download ? `<a class="download-btn" href="${tool.download}" download>下载 EXE</a>` : ""}
    </div>
    <p><code>${tool.path}</code></p>
  `;

  detailPanel.querySelector(".copy-button").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const command = button.dataset.command;
    await copyText(command);
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy Command";
    }, 1200);
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function render() {
  renderFilters();
  renderTools();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

render();
