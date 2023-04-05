<template>
    <div>
        <div id="button">
            <h2>Buttons</h2>
            <div>
                <div>
                    <button type="button" class="btn btn-success">
                        <i class="far fa-frown"></i>Success
                    </button>
                    <button type="button" class="btn btn-danger">
                        <i class="far fa-gem"></i>Danger
                    </button>
                    <button type="button" class="btn btn-warning">
                        <i class="far fa-grin"></i>Warning
                    </button>
                    <button type="button" class="btn btn-info">
                        <i class="fas fa-id-card"></i>Info
                    </button>
                </div>
                <div>
                    <button type="button" class="btn btn-default btn-sm">
                        Small button
                    </button>
                    <button type="button" class="btn btn-primary btn-sm">
                        Small button
                    </button>
                    <button type="button" class="btn btn-default btn-lg">
                        Large button
                    </button>
                    <button type="button" class="btn btn-primary btn-lg">
                        Large button
                    </button>
                </div>
            </div>
            <div>
                <!-- Facebook -->
                <a
                    class="btn text-white"
                    style="background-color: #3b5998"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-facebook-f"></i>
                </a>

                <!-- Twitter -->
                <a
                    class="btn text-white"
                    style="background-color: #55acee"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-twitter"></i>
                </a>

                <!-- Google -->
                <a
                    class="btn text-white"
                    style="background-color: #dd4b39"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-google"></i>
                </a>

                <!-- Instagram -->
                <a
                    class="btn text-white"
                    style="background-color: #ac2bac"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-instagram"></i>
                </a>

                <!-- Linkedin -->
                <a
                    class="btn text-white"
                    style="background-color: #0082ca"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>

                <!-- Pinterest -->
                <a
                    class="btn text-white"
                    style="background-color: #c61118"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-pinterest"></i>
                </a>

                <!-- Vkontakte -->
                <a
                    class="btn text-white"
                    style="background-color: #4c75a3"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-vk"></i>
                </a>

                <!-- Stack overflow -->
                <a
                    class="btn text-white"
                    style="background-color: #ffac44"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-stack-overflow"></i>
                </a>

                <!-- Youtube -->
                <a
                    class="btn text-white"
                    style="background-color: #ed302f"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-youtube"></i>
                </a>

                <!-- Slack -->
                <a
                    class="btn text-white"
                    style="background-color: #481449"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-slack-hash"></i>
                </a>

                <!-- Github -->
                <a
                    class="btn text-white"
                    style="background-color: #333333"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-github"></i>
                </a>

                <!-- Dribbble -->
                <a
                    class="btn text-white"
                    style="background-color: #ec4a89"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-dribbble"></i>
                </a>

                <!-- Reddit -->
                <a
                    class="btn text-white"
                    style="background-color: #ff4500"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-reddit-alien"></i>
                </a>

                <!-- Whatsapp -->
                <a
                    class="btn text-white"
                    style="background-color: #25d366"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
        <div>
            <h2>Workflow Button</h2>
            <LazyUtilsWorkflowButton @action-flow="actionFlowButtonInit" />
            <LazyUtilsWorkflowButton
                className="pt-3"
                defaultBtn="cancel"
                @action-flow="actionFlowButtonInit"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const actionFlowButtonInit = (
    step: string,
    action: string,
    actiontype: string
): void => {
    console.log("👉🏻 actionFlowButtonInit Function!");
    console.log("# actionFlow: ", {
        step: step,
        action: action,
        actiontype: actiontype,
    });
};
</script>

<style lang="scss" scoped></style>
