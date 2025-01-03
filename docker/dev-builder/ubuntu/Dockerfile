FROM ubuntu:20.04
# Dockerfile 中的根路径变量，包含所有所需的依赖。
ARG DOCKER_BUILD_ROOT=.
ENV LANG en_US.utf8
WORKDIR /greptimedb
# 添加 PPA 以安装 Python 3.10。
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa -y
# 安装依赖项。
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    libssl-dev \
    tzdata \
    curl \
    unzip \
    ca-certificates \
    git \
    build-essential \
    pkg-config \
    python3.10 \
    python3.10-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
ARG TARGETPLATFORM
RUN echo "target platform: $TARGETPLATFORM"
# 安装 protobuf，因 apt 中的版本过旧（v3.12）。
RUN if [ "$TARGETPLATFORM" = "linux/arm64" ]; then \
    curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v29.1/protoc-29.1-linux-aarch_64.zip && \
    unzip protoc-29.1-linux-aarch_64.zip -d protoc3; \
elif [ "$TARGETPLATFORM" = "linux/amd64" ]; then \
    curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v29.1/protoc-29.1-linux-x86_64.zip && \
    unzip protoc-29.1-linux-x86_64.zip -d protoc3; \
fi
RUN mv protoc3/bin/* /usr/local/bin/ && \
    mv protoc3/include/* /usr/local/include/ && \
    rm -rf protoc3*
# 安装 GCC 10。
RUN apt-get update && \
    apt-get remove -y gcc-9 g++-9 cpp-9 && \
    apt-get install -y gcc-10 g++-10 cpp-10 make cmake && \
    ln -sf /usr/bin/gcc-10 /usr/bin/gcc && \
    ln -sf /usr/bin/g++-10 /usr/bin/g++ && \
    ln -sf /usr/bin/gcc-10 /usr/bin/cc && \
    ln -sf /usr/bin/g++-10 /usr/bin/cpp && \
    ln -sf /usr/bin/g++-10 /usr/bin/c++ && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
# 确保 Python 3.10 为默认版本并安装 pip。
RUN apt-get -y purge python3.8 && \
    apt-get -y autoremove && \
    ln -s /usr/bin/python3.10 /usr/bin/python3 && \
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3.10
# 配置 git 的安全目录。
RUN git config --global --add safe.directory '*'
# 复制并安装 Python 依赖项。
COPY $DOCKER_BUILD_ROOT/docker/python/requirements.txt /etc/greptime/requirements.txt
RUN python3 -m pip install --no-cache-dir -r /etc/greptime/requirements.txt
# 安装 Rust 并设置环境。
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --no-modify-path --default-toolchain none -y
# 设置 Rust 的 PATH。
ENV PATH="/root/.cargo/bin:${PATH}"
# 安装指定的 Rust nightly 工具链。
ARG RUST_TOOLCHAIN=nightly-2024-10-19
RUN rustup toolchain install ${RUST_TOOLCHAIN} --target=x86_64-unknown-linux-gnu && \
    rustup component add rust-src --toolchain ${RUST_TOOLCHAIN}
# 复制脚本并运行。
COPY $DOCKER_BUILD_ROOT/docker/dev-builder/binstall/pull_binstall.sh /usr/local/bin/pull_binstall.sh
RUN chmod +x /usr/local/bin/pull_binstall.sh && /usr/local/bin/pull_binstall.sh
# 安装 nextest。
RUN cargo +${RUST_TOOLCHAIN} binstall cargo-nextest --no-confirm
