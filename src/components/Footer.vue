<template>
	<footer class="footer">
		<div class="page__area-title">
			<h3 class="subtitle-black-big">Join us</h3>
			<div class="page__area-line"></div>
		</div>
		<div class="footer__container">
			<div class="footer__logo">
				<UIIcon path="Logo" />
				<p>
					<span>All right reserved</span> Phygital<br />
					Real Estate 2023
				</p>
			</div>
			<div class="footer__info">
				<h4>Have a property to list or project to fund?</h4>
				<span class="footer__info-separator"></span>
				<p>
					We're eager to hear from you, contact us today so<br />
					we can discuss it further.
				</p>
				<button class="btn color-main">Submit a property</button>
			</div>
			<div class="footer__info">
				<h4>Documents</h4>
				<span class="footer__info-separator"></span>
				<a href="#">Privacy policy</a>
				<a href="#">Therms of use</a>
			</div>
		</div>
	</footer>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    footer {
        padding-bottom: 54px;
        position: relative;
        overflow: hidden;
        margin-top: 100px;
        &::before {
            content: "";
            position: absolute;
            width: 332px;
            height: 173px;
            left: calc(50% + 600px);
            bottom: -140px;
            background: #27d3dd;
            filter: blur(150px);
        }
    }

    .footer {
        .page__area-title {
            max-width: 1280px;
            margin: 0 auto 42px;
        }
        &__container {
            margin: 0 auto;
            max-width: 1280px;
            display: flex;
            gap: 120px;
            align-items: flex-start;
        }
        &__logo {
            p {
                margin-top: 32px;
                font-size: 12px;
                font-weight: 400;
                color: var(--black);
                line-height: 16px;
                span {
                    color: #717171;
                }
            }
        }
        &__info {
            h4 {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                color: var(--black);
            }
            p,
            a {
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 0em;
                color: #717171;
            }
            p {
                margin: 32px 0;
                line-height: 22px;
            }
            a {
                margin-top: 25px;
                line-height: 16px;
                display: block;
            }
        }
        &__info-separator {
            display: block;
            width: 23px;
            height: 4px;
            background: #0bced7;
            margin-top: 12px;
            border-radius: 10px;
        }
    }

    @media screen and (max-width: 528px) {
        .footer {
            &__container {
                flex-direction: column;
                gap: 48px;
                padding: 0 20px;
            }
            .page__area-title {
                margin-right: 20px;
                margin-left: 20px;
            }
        }
    }
</style>
