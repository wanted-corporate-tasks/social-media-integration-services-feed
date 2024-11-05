#!/bin/bash

# Git hooks 디렉토리
HOOKS_DIR=".git/hooks"
HOOK_FILE="$HOOKS_DIR/prepare-commit-msg"

# prepare-commit-msg 내용 작성
cat << 'EOF' > "$HOOK_FILE"
#!/bin/bash

# 건너뛸 브랜치 설정
BRANCHES_TO_SKIP=(master main develop test dev)

# 현재 브랜치 이름 가져오기
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# 스킵할 브랜치인지 확인 (BRANCHES_TO_SKIP 목록에 있거나 /가 없는 경우)
BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
NO_SLASH_IN_BRANCH_NAME=$(echo "$BRANCH_NAME" | grep -c "/")
if [[ $BRANCH_EXCLUDED -eq 1 ]] || [[ $NO_SLASH_IN_BRANCH_NAME -eq 0 ]]; then
  exit 0
fi

# 브랜치 이름에서 taskId 추출
TASK_ID="${BRANCH_NAME%%/*}"

# 커밋 메시지에 taskId 추가 (이미 추가된 경우 제외)
BRANCH_IN_COMMIT=$(grep -c "^\[$TASK_ID\]" "$1")
if [ -n "$TASK_ID" ] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
  sed -i.bak -e "1s/^/[$TASK_ID] /" "$1"
fi
EOF

# 스크립트에 실행 권한 부여
chmod +x "$HOOK_FILE"

echo "prepare-commit-msg hook 설정이 완료되었습니다."
