
# fs模块

fs 模块是文件操作的࠯装，它提供了文件的读取、写入、更改、删除、遍历目录、链接等POSIX文件系统操作。与其他模块不同的是， fs 模块中所有的操作都提供了异步的和同步的两个版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的fs.readFileSync()。

## open

fs.open(path, flags, [mode], [callback(err, fd)])是 POSIX open 函数的封装，与 C 语言标准库中的 fopen 函数类似。它接受两个必选参数，path 为文件的路径，flags 可以是以下值。

* 'r' : 以读取的模式打开,文件不存在发送异常
* 'r+' : 以读写的模式打开,文件不存在发送异常
* 'w' : 以写入模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。
* 'w+' : 以读写模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。
* 'a' : 以追加模式打开文件。如果文件不存在，则会被创建。
* 'a+' : 以读取和追加模式打开文件。如果文件不存在，则会被创建。

 callback：回调函数；有两个参数：err fd  fd表示指定的文件；

## read

fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead,buffer)])是 POSIX read 函数的封装，它比 fs.readFile 提供了更底层的接口。fs.read的功能是从指定的文件中描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象。 offset 是 buffer 的写入偏移量。 length 是要从文件中读取的字节数。 position 是文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。回调函数传递bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。

## readFile

fs.readFile(filename,[encoding],[callback(err,data)])中简单的读取文件函数,它接受一个必选参数 filename，表示要读取的文件名。第二个个参数 encoding是可选的，表示文件的字符编码。 callback 是回调函数，用于接收文件的内容。如果不指定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data，err 表示有没有错误发生， data 是文件内容。如果指定了 encoding， data 是一个解析后的字符串，否则 data 将会是以 Buffer 形式表示的二进制数据。

## readFileSync

它是 fs.readFile 同步的版本。它接受的参数和 fs.readFile 相同，而读取到的文件内容会以函数返回值的形式返回。如果有错误发生， fs 将会抛出异常，你需要使用 try 和 catch 捕捉异常并处理异常。

## stat

fs.stat(path,callback)常用于检测文件的状态，可以借此来判断某个文件是否存在。path参数传入该文件的绝对物理路径，该callback回调函数有两个参数err和stats。其中err为错误信息参数，stats为一个文件状态对象.

## writeFile

fs.writeFile(path,data[,options],callback)可用于往指定文件当中写入内容，该内容会覆盖文件当中原有的内容。若传入的文件路径当中的文件不存在，则先完成该文件的创建，再往里面写入指定内容。path参数为该文件的绝对物理路径，data为需要写入该文件当中的数据内容，其中options参数可选，可以传入编码格式，若不传则默认为utf8。callback回调参数当中只有一个错误信息参数err，一般在写入失败时触发调用。

## appendFile

fs.appendFile(path,data[,options],callback)该方法可用于往指定文件当中追加写入内容，该内容不会覆盖文件当中原有的内容，只会在原有内容的基础上进行追加。若传入的文件路径当中的文件不存在，则先完成该文件的穿件，再往里面写入指定内容。path参数为该文件的绝对物理路径，data为需要写入该文件当中的数据内容，其中options参数可选，可以传入编码格式，若不传则默认为utf8。callback回调参数当中只有一个错误信息参数err，一般在追加写入失败时触发调用。

## unlink

fs.unlink(path,callback)该方法可用于完成指定文件的删除。path参数为该文件的绝对物理路径，callback回调参数当中只有一个错误信息参数err，一般在该文件不存在或者删除文件失败时触发调用。

## rename

fs.rename(oldPath,newPath,callback)该方法可用于移动或重命名指定文件。oldPath参数为该文件原来的路径，newPath参数为该文件移动或重命名之后的路径，这两个参数都必须能传入文件完整的绝对物理路径。callback回调参数当中只有一个错误信息参数，一般在oldPath当中指定的文件不存在或者该操作失败时触发调用。

## mkdir

fs.mkdir(path[,model],callback)该方法可以用于创建一个目录文件夹，其中path为该目录的绝对物理路径，callback回调函数当中也只有一个错误信息参数，一般在目录创建失败时触发调用。

## rmdir

fs.rmdir(path,callback)该方法可以用于删除一个空目录。其中path为该目录的绝对物理路径，callback回调函数当中也只有一个错误信息参数，一般在该目录不存在或者删除操作失败时触发调用。

## readdir

fs.readdir(path,callback)该方法可以用于读取一个指定目录当中的信息。其中path为该目录的绝对物理路径，callback回调函数当中有两个参数err和files，err为错误信息参数，一般在该目录不存在或读取失败时触发调用，files为一个数组对象，包含该目录下的所有文件夹与文件的名字。（仅为文件夹的名字和文件名，不是路径形式）。