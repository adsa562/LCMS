node {
	def app
	def project_name = 'LCMS'

	stage('Clone repo'){
		checkout scm
	}

	stage('Build'){
		echo 'Cleaning old files.'
    sh "rm -rf .git"
		sh "cp -f /home/limeishu/jenkins/LCMS/config.json ./server/"
		sh "ls -lah"
		sh "yarn"
		sh "yarn run build"
		echo 'Packing files.'
		sh "zip -r package.zip ."
	}

  stage('Push to Remote Server'){
		echo 'Connecting to the server.'
		sh "scp -r -P 2047 $WORKSPACE/package.zip www@ssh.limeishu.org.tw:/home/www/webserver/v2/LCMS"
	}

	stage('Active Service'){
    echo 'Connecting to the server.'
    sh "ssh www@ssh.limeishu.org.tw -p 2047 '\
          cd /home/www/webserver/v2/LCMS; \
          unzip -o package.zip; \
          ls -lah; \
          pm2 restart startup.json; \
          rm package.zip; \
          ls -lah; \
      '"
	}

	stage('Clean'){
		echo 'Cleaning old files.'
		sh "rm -rf package.zip"
	}
}