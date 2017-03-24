module.exports = function(grunt) {
    grunt.file.setBase(__dirname);
    var packdir = '../tool/'; //package.json所在的目录
    var npmdir = '../tool/node_modules/'; //npm模块路径

    var _product_dir = '../dist/node-coreui-pc';

	grunt.initConfig({
		pkg: grunt.file.readJSON(packdir+'package.json'),
        //coreui文件复制
		// copy: {
		// 	coreui: {
		// 		expand: true,
		// 		cwd: '.',
		// 		src: ['js/widget/lib/**'],
		// 		dest: _product_dir
		// 	}
		// },
        //压缩
	    uglify: {
		   options: {
			   report: 'gzip'
		   },
		   apps: {
               expand: true,
               cwd: '.',
               src: ['js/widget/lib/*.js'],
               dest: _product_dir,
               ext: '.js'
		   }
	    },
        //coreui css打包压缩
		cssmin: {
			minify: {
				expand: true,
				cwd: '.',
				src: ['css/page/*.css'],
				dest: _product_dir
			}
		},
        //清空文件夹
        clean: {
		    options: {
		        force: true
		    },
            dist: [_product_dir+"/*","!"+_product_dir+"/.git"]
		}
	});

    // grunt.loadTasks(npmdir+'grunt-contrib-copy/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-cssmin/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-clean/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-uglify/tasks');

    /*******提测或上线执行*********/
    // 打包压缩
    // grunt -v --base=D:\mycoderoot\project-frame\tool\node_modules
	grunt.registerTask('default', 'default', function(){
        grunt.task.run(['clean','uglify','cssmin']);
	});
};
