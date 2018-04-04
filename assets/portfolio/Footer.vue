<template>
    <div class="footer-container">
        <div class="container text-center">
            <div class="contacts-container">
                <div class="row">
                    <h2>Contact Me</h2>
                </div>
                <div class="row">
                    <p>EMAIL: <a href="mailto:erzhu4@gmail.com">erzhu4@gmail.com</a></p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <a class="icon-container" target="_blank" href="https://www.linkedin.com/pub/eric-zhu/92/b08/670">
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a class="icon-container" target="_blank" href="https://github.com/erzhu4">
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        color: white;
        margin: auto;
    }

    .btn {
        color: #43bff0;
    }

    .icon-container:hover {
        cursor: pointer;
    }

    .footer-container {
        padding: 2rem;
        width: 100%;
        background: #313131;
    }

    .contacts-container {
        margin:auto;
        display: inline-block;
    }
</style>