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
    status: "Installer",
    summary:
      "个人 Maya 工具箱插件，用分类、收藏、快捷键和工具注册信息管理脚本，适合把零散 Python/MEL 工具集中起来。",
    tags: ["Toolbox", "Python", "MEL", "EXE"],
    features: [
      "内置动画、绑定、模型、特效、其他等五大分类，可按需自定义分类结构。",
      "支持工具图标、收藏星标、快捷键注册和本地配置持久化。",
      "已按 Maya 2020-2027 全版本兼容方向整理，EXE 安装包一键部署。"
    ],
    command: `// 在 Maya Script Editor 的 Python 标签中执行:
exec(open(r"D:/Codex/maya/Bingo_ToolBox_01/install.mel", "r").read())`,
    path: "D:/Codex/maya/Bingo_ToolBox_01/",
    download: "https://raw.githubusercontent.com/331908200-dotcom/Bingo-Tools/main/Bingo_ToolBox_Maya2020-2026_CustomMenu_Setup.exe",
    tutorial: [
      {
        title: "1. 安装方式",
        content: "双击运行 EXE 安装包，安装程序会自动将工具文件释放到 Documents/maya/Bingo_ToolBox/ 目录，并注册 Maya module 入口。如已安装旧版，安装程序会自动备份后覆盖升级。",
        code: "安装路径: Documents\\maya\\Bingo_ToolBox\\\nModule 入口: Documents\\maya\\modules\\Bingo_ToolBox.mod\n备份目录: Documents\\maya\\Bingo_ToolBox_backup\\"
      },
      {
        title: "2. 打开工具箱",
        content: "安装完成后重新启动 Maya，在 Maya 顶部菜单栏找到 Bingo 菜单，点击 ToolBox 即可打开工具箱主界面。",
        code: "Maya 菜单栏 → Bingo → ToolBox"
      },
      {
        title: "3. 注册脚本工具",
        content: "在工具箱界面中右键点击分类区域，选择「新建工具」。填写工具名称、描述，粘贴 Python 或 MEL 代码，指定图标和快捷键。保存后工具即出现在对应分类中，点击即可执行。",
        code: "# 示例：注册一个快速选择所有控制器的工具\nimport maya.cmds as cmds\nctrls = cmds.ls(\"*_ctrl\", type=\"transform\")\ncmds.select(ctrls)\nprint(f\"已选择 {len(ctrls)} 个控制器\")"
      },
      {
        title: "4. 自定义菜单",
        content: "Bingo ToolBox 支持在 Maya 主菜单栏创建自定义下拉菜单，将常用工具直接暴露在菜单层级中。进入工具箱设置 → 菜单编辑器，拖拽工具到菜单树中即可。",
        code: "// 自定义菜单示例结构：\nBingo/\n  ├── Animation/\n  │   ├── Pose Mirror\n  │   └── Time Machine\n  ├── Rigging/\n  │   ├── Skin Mirror\n  │   └── Controller Check\n  └── Utility/\n      ├── Clean Scene\n      └── Batch Rename"
      },
      {
        title: "5. 卸载方式",
        content: "安装目录下自带卸载脚本。运行 uninstall_Bingo_ToolBox.cmd 会移除 Maya module 入口，之后可手动删除工具目录完成彻底卸载。",
        code: "运行: Documents\\maya\\Bingo_ToolBox\\uninstall_Bingo_ToolBox.cmd\n手动删除: Documents\\maya\\Bingo_ToolBox\\"
      }
    ]
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

// ===== State =====
const state = {
  category: "All",
  query: "",
  selected: tools[0].name
};

// ===== DOM Refs =====
const moduleGrid = document.getElementById("moduleGrid");
const toolGrid = document.getElementById("toolGrid");
const filterBar = document.getElementById("filterBar");
const detailPanel = document.getElementById("detailPanel");
const searchInput = document.getElementById("searchInput");

// ===== Helpers =====
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
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

function normalize(value) {
  return value.toLowerCase().trim();
}

function getCategories() {
  return ["All", ...Array.from(new Set(tools.map((t) => t.category)))];
}

function getFilteredTools() {
  const query = normalize(state.query);
  return tools.filter((tool) => {
    const catMatch = state.category === "All" || tool.category === state.category;
    const haystack = normalize([tool.name, tool.category, tool.summary, tool.version, tool.status, ...tool.tags, ...tool.features].join(" "));
    return catMatch && (!query || haystack.includes(query));
  });
}

// ===== Module Grid (hero下面) =====
function renderModuleGrid() {
  moduleGrid.innerHTML = tools.map(function (tool) {
    return '<div class="module-card" data-tool="' + escapeAttribute(tool.name) + '">' +
      '<div class="module-card-header">' +
        '<img src="' + tool.icon + '" alt="" loading="lazy">' +
        '<div><h3>' + escapeHtml(tool.name) + '</h3>' +
        '<span class="module-status">' + escapeHtml(tool.status) + '</span></div>' +
      '</div>' +
      '<p>' + escapeHtml(tool.summary) + '</p>' +
      '<div class="module-tags">' +
        tool.tags.slice(0, 4).map(function (tag) { return '<span class="module-tag">' + escapeHtml(tag) + '</span>'; }).join("") +
      '</div>' +
    '</div>';
  }).join("");

  moduleGrid.querySelectorAll(".module-card").forEach(function (card) {
    card.addEventListener("click", function () {
      state.selected = card.dataset.tool;
      state.category = "All";
      if (searchInput) searchInput.value = "";
      state.query = "";
      document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
      render();
    });
  });
}

function renderModuleGridFiltered() {
  moduleGrid.querySelectorAll(".module-card").forEach(function (card) {
    var name = card.dataset.tool.toLowerCase();
    var query = state.query.toLowerCase();
    card.style.display = query && !name.includes(query) ? "none" : "";
  });
}

// ===== Filter Bar =====
function renderFilters() {
  filterBar.innerHTML = "";
  getCategories().forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (state.category === category ? " active" : "");
    btn.type = "button";
    btn.textContent = category;
    btn.addEventListener("click", () => {
      state.category = category;
      render();
    });
    filterBar.appendChild(btn);
  });
}

// ===== Tool Grid =====
function renderToolGrid() {
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

  if (!filtered.some((t) => t.name === state.selected)) {
    state.selected = filtered[0].name;
  }

  filtered.forEach((tool) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "tool-card" + (state.selected === tool.name ? " active" : "");
    card.addEventListener("click", () => {
      state.selected = tool.name;
      render();
    });
    card.innerHTML = `
      <div class="tool-card-header">
        <img src="${tool.icon}" alt="" loading="lazy">
        <div>
          <h3>${escapeHtml(tool.name)}</h3>
          <span class="card-status">${escapeHtml(tool.status)}</span>
        </div>
      </div>
      <p>${escapeHtml(tool.summary)}</p>
      <div class="card-tags">
        ${tool.tags.slice(0, 4).map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;
    toolGrid.appendChild(card);
  });

  renderDetail(tools.find((t) => t.name === state.selected));
}

// ===== Detail Panel =====
function renderDetail(tool) {
  if (!tool) {
    detailPanel.innerHTML = "";
    return;
  }

  var tutorialHTML = "";
  if (tool.tutorial) {
    tutorialHTML = '<div class="tutorial-section"><p class="eyebrow" style="margin-top:0">Tutorial</p>' +
      tool.tutorial.map(function (step) {
        var codeBlock = "";
        if (step.code) {
          codeBlock = '<pre><code>' + escapeHtml(step.code) + '</code></pre>' +
            '<button class="tutorial-copy-btn" type="button" data-code="' + escapeAttribute(step.code) + '">Copy</button>';
        }
        return '<div class="tutorial-item"><h4>' + escapeHtml(step.title) + '</h4><p>' + escapeHtml(step.content) + '</p>' + codeBlock + '</div>';
      }).join("") + '</div>';
  }

  detailPanel.innerHTML =
    '<p class="eyebrow">' + escapeHtml(tool.category) + '</p>' +
    '<h2>' + escapeHtml(tool.name) + '</h2>' +
    '<p>' + escapeHtml(tool.summary) + '</p>' +
    '<div class="detail-meta">' +
      '<span class="tag">' + escapeHtml(tool.version) + '</span>' +
      '<span class="status-tag">' + escapeHtml(tool.status) + '</span>' +
      tool.tags.map(function (tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("") +
    '</div>' +
    '<ul class="feature-list">' +
      tool.features.map(function (f) { return '<li>' + escapeHtml(f) + '</li>'; }).join("") +
    '</ul>' +
    tutorialHTML +
    '<div class="detail-actions" style="margin-top:16px">' +
      '<button class="copy-btn" type="button" data-code="' + escapeAttribute(tool.command) + '">Copy Command</button>' +
      (tool.download ? '<a class="download-btn-detail" href="' + tool.download + '" download>下载 EXE</a>' : "") +
    '</div>';

  // bind copy buttons
  detailPanel.querySelectorAll(".copy-btn, .tutorial-copy-btn").forEach(function (btn) {
    btn.addEventListener("click", async function (e) {
      var code = e.currentTarget.dataset.code;
      await copyText(code);
      var original = e.currentTarget.textContent;
      e.currentTarget.textContent = "Copied!";
      window.setTimeout(function () {
        e.currentTarget.textContent = original;
      }, 1200);
    });
  });
}

// ===== Main Render =====
function render() {
  renderFilters();
  renderToolGrid();
}

// ===== Init =====
renderModuleGrid();
render();

if (searchInput) {
  searchInput.addEventListener("input", function (e) {
    state.query = e.target.value;
    state.category = "All";
    document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
    render();
    renderModuleGridFiltered();
  });
}

// ===== Donate QR =====
(function () {
  var donateBtn = document.getElementById("donateBtn");
  var qrOverlay = document.getElementById("qrOverlay");
  var qrClose = document.getElementById("qrClose");
  var qrImgBox = document.getElementById("qrImgBox");
  var qrSwitch = document.getElementById("qrSwitch");

  if (!donateBtn) return;

  var isWeChat = true;

  donateBtn.addEventListener("click", function () {
    qrOverlay.style.display = "flex";
  });

  qrClose.addEventListener("click", function () {
    qrOverlay.style.display = "none";
  });

  qrOverlay.addEventListener("click", function (e) {
    if (e.target === qrOverlay) qrOverlay.style.display = "none";
  });

  qrSwitch.addEventListener("click", function () {
    isWeChat = !isWeChat;
    if (isWeChat) {
      qrImgBox.innerHTML = '<img src="assets/wechat-qr.png" alt="微信收款码">';
      qrSwitch.innerText = "点击切换：支付宝";
    } else {
      qrImgBox.innerHTML = "<img src=\"assets/alipay-qr.png\" alt=\"支付宝收款码\">";
      qrSwitch.innerText = "点击切换：微信";
    }
  });
})();
