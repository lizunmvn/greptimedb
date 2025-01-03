searchState.loadedDescShard("common_base", 0, "<code>SecretBox</code> wrapper type for more carefully handling secret …\nSymbol Export\nAll implementors are required to have <code>Self</code> and <code>Self::Alias</code> …\nAll implementors are required to have their alignment …\nA type that selects the appropriate load/store …\nA sibling <code>BitStore</code> implementor that is known to be …\nImmutable Bit View\nMutable Bit View\nBit-Array Type Definition\nBit-Precision Array Immediate\nFixed-Size, Heap-Allocated, Bit Slice\nIn-Element Bit Ordering\nSingle-Bit Pointer\nBit-Pointer Range\nProxy Bit-Reference\nBit-Addressable Memory\nBit Storage\nBit-Precision Dynamic Array\nThe canonical dangling pointer. This selects the starting …\nThe canonical empty range. All ranges with zero length …\nAn empty bit-vector with no backing allocation.\nLeast-Significant-First Bit Traversal\nLeast-Significant-First Bit Traversal\nThe inclusive maximum length of a <code>BitSlice&lt;_, T&gt;</code>.\nThe inclusive maximum length that a <code>[T]</code> slice can be for …\nThe element type used in the memory region underlying a …\nMost-Significant-First Bit Traversal\nThe underlying element type.\nThe inverse of <code>::Alias</code>. It is used when a <code>BitSlice</code> removes …\nA bit-array with all bits initialized to zero.\nThe zero constant.\nThe zero constant.\nHelper trait for scalars and arrays, but not slices.\nBit View\nC-Style Bit-Field Access\nThe ordering of bits within an <code>A::Store</code> element.\nAdjusts a bit-pointer upwards in memory. This is …\nGets the address of the base storage element.\nComputes the offset (in bits) that needs to be applied to …\nProduces bit-slice view(s) with different underlying …\nProduces bit-slice view(s) with different underlying …\nTests if every bit is set to <code>1</code> in the bit-slice.\nTests if there is at least one bit set to <code>1</code> in the …\nMoves all the bits out of <code>other</code> into the back of <code>self</code>.\nGets a raw pointer to the zeroth bit of the bit-slice.\nCreates an unsafe shared bit-pointer to the start of the …\nViews the bit-slice as a half-open range of bit-pointers, …\nViews <code>self</code> as an immutable bit-slice region with the <code>O</code> …\nExplicitly views the bit-array as a bit-slice.\nExplicitly views the bit-box as a bit-slice.\nExplicitly views the bit-vector as a bit-slice.\nProduces a proxy reference to the referent bit.\nGets a raw, write-capable pointer to the zeroth bit of the …\nCreates an unsafe writable bit-pointer to the start of the …\nViews the bit-slice as a half-open range of write-capable …\nViews <code>self</code> as a mutable bit-slice region with the <code>O</code> …\nExplicitly views the bit-array as a mutable bit-slice.\nExplicitly views the bit-box as a mutable bit-slice.\nExplicitly views the bit-vector as a mutable bit-slice.\nProduces a range of mutable bit-pointers to each bit in …\nReturns a mutable bit-slice containing the entire …\nProduces a range of bit-pointers to each bit in the …\nViews the type as a mutable slice of its elements.\nViews the bit-array as a mutable slice of its underlying …\nViews the bit-box as a mutable slice of its underlying …\nViews the bit-vector as a mutable slice of its underlying …\nViews the type as a slice of its elements.\nViews the bit-array as a slice of its underlying memory …\nViews the bit-box as a slice of its underlying memory …\nViews the bit-vector as a slice of its underlying memory …\nProduces a proxy reference to the referent bit.\nReturns a bit-slice containing the entire bit-array. …\nTranslates a semantic bit index into a real bit position.\nGets the <code>BitIdx</code> that selects the bit within the memory …\nPartitions a bit-slice into maybe-contended and …\nPartitions a mutable bit-slice into maybe-contended and …\nBoolean Arithmetic\nBit-Array Value Constructor\nBoxed Bit-Slice Constructor\nBoolean Arithmetic\nBit-Slice Region Constructor\nBit-Vector Constructor\nBoolean Arithmetic\nGets the allocation capacity, measured in bits.\nCasts to a <code>BitPtr</code> with a different storage parameter.\nIterates over non-overlapping subslices of a bit-slice.\nIterates over non-overlapping subslices of a bit-slice.\nIterates over non-overlapping mutable subslices of a …\nIterates over non-overlapping mutable subslices of a …\nEmpties the bit-vector.\nCopies the bits from <code>src</code> into <code>self</code>.\nCommits a bit into the proxied location.\nTests if a given bit-pointer is contained within the range.\nTests if the bit-slice contains the given sequence …\nCopies <code>count</code> bits from the region starting at <code>src</code> to the …\nCopies all bits from <code>src</code> into <code>self</code>, using batched …\nCopies <code>count</code> bits from the region starting at <code>src</code> to the …\nCopies <code>count</code> bits from <code>self</code> to <code>dest</code>. The source and …\nCopies <code>count</code> bits from <code>self</code> to <code>dest</code>. The source and …\nCopies a span of bits to another location in the bit-slice.\nCopies bits from one region of the bit-slice to another …\nCounts the number of bits set to <code>1</code> in the bit-slice …\nCounts the number of bits cleared to <code>0</code> in the bit-slice …\nThe wrapped data buffer.\nViews the underlying memory of a bit-slice, removing alias …\nViews the underlying memory of a bit-slice, removing alias …\nIterates over a portion of the bit-vector, <em>removing</em> all …\nRuns the destructor of the referent value.\nProduces an empty bit-slice with an arbitrary lifetime.\nProduces an empty bit-slice with an arbitrary lifetime.\nThe higher, exclusive, bound of the range. The bit to …\nTests if the bit-slice ends with the given sequence.\nAppends the contents of a bit-slice to a bit-vector.\nAppends a slice of <code>T</code> elements to a bit-vector.\nExtends <code>self</code> by copying an internal range of its bit-slice …\nFills the bit-slice with a given bit.\nSets the unused bits outside the <code>BitBox</code> buffer to a fixed …\nFills the bit-slice with bits produced by a generator …\nGets a reference to the first bit of the bit-slice, or <code>None</code>…\nGets a mutable reference to the first bit of the …\nFinds the index of the first bit in the bit-slice set to <code>1</code>.\nFinds the index of the first bit in the bit-slice cleared …\nEnsures that the allocated buffer has no dead bits between …\nEnsures that the live region of the bit-vector’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a bit-pointer into a proxy bit-reference.\nCopies a bit-slice region into a new bit-box allocation.\nCopies the contents of a bit-slice into a new heap …\nConverts a <code>Box&lt;[T]&gt;</code> into a <code>BitBox&lt;T, O&gt;</code>, in place.\nConstructs a shared <code>&amp;BitSlice</code> reference over a shared …\nConstructs a new bit-vector from a single element.\nConstructs an exclusive <code>&amp;mut BitSlice</code> reference over an …\nConstructs a mutable <code>BitPtr</code> to the zeroth bit in a single …\nConstructs a <code>BitPtr</code> to the zeroth bit in the zeroth …\nExplicitly converts a <code>Range&lt;BitPtr&gt;</code> into a <code>BitPtrRange</code>.\nConstructs a bit-box from a raw bit-slice pointer.\nConstructs a bit-vector handle from its constituent fields.\nConstructs a <code>BitPtr</code> to the zeroth bit in a single element.\nConstructs a <code>BitPtr</code> to the zeroth bit in the zeroth …\nConstructs a shared <code>&amp;BitSlice</code> reference over a slice of …\nConstructs a new bit-vector from a slice of memory …\nConstructs a mutable <code>BitPtr</code> to the zeroth bit in the …\nConstructs an exclusive <code>&amp;mut BitSlice</code> reference over a …\nConstructs a shared <code>&amp;BitSlice</code> over an element slice, …\nConstructs an exclusive <code>&amp;mut BitSlice</code> over an element …\nConverts a regular vector in-place into a bit-vector.\nGets a reference to a single bit or a subsection of the …\nReads a single bit out of the memory system according to …\nGets a mutable reference to a single bit or a subsection …\nGets a reference to a single bit or to a subsection of the …\nGets a mutable reference to a single bit or a subsection …\nLooks up a single bit by its semantic index.\nInserts a bit at a given position, shifting all bits after …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWraps <code>self</code> in a <code>BitArray</code>.\nDecays the bit-reference to an ordinary bit-pointer.\nConverts the bit-box into a bit-vector.\nConverts a bit-vector into a boxed bit-slice.\nConverts the bit-box back into an ordinary boxed element …\nRemoves the bit-array wrapper, returning the contained …\nExplicitly converts a <code>BitPtrRange</code> into a <code>Range&lt;BitPtr&gt;</code>.\nConsumes the bit-box, returning a raw bit-slice pointer.\nDecomposes a bit-vector into its constituent member fields.\nConverts a bit-vector into a <code>Vec</code> of its underlying storage.\nTests whether the array is empty.\nTests if the range is empty (the distance between …\nTests if the bit-slice is empty (length zero).\nTests if the bit-vector is empty.\nTests if a bit-pointer is the null value.\nProduces an iterator over each bit in the bit-slice.\nProduces a mutable iterator over each bit in the bit-slice.\nEnumerates the index of each bit in a bit-slice set to <code>1</code>.\nEnumerates the index of each bit in a bit-slice cleared to …\nGets a reference to the last bit of the bit-slice, or <code>None</code> …\nGets a mutable reference to the last bit of the bit-slice, …\nFinds the index of the last bit in the bit-slice set to <code>1</code>.\nFinds the index of the last bit in the bit-slice cleared …\nCounts the number of bits from the start of the bit-slice …\nCounts the number of bits from the start of the bit-slice …\nDeliberately leaks the allocated memory, returning an …\nDestroys the <code>BitVec</code> handle without destroying the …\nGets the length (in bits) of the bit-array.\nGets the number of bits in the bit-slice.\nGets the length of the bit-vector.\nInteger Loading\nBig-Endian Integer Loading\n<code>Msb0</code> Big-Endian Integer Loading\n<code>Lsb0</code> Big-Endian Integer Loading\nLittle-Endian Integer Loading\n<code>Msb0</code> Little-Endian Integer Loading\n<code>Lsb0</code> Little-Endian Integer Loading\nLoads a value out of the memory system according to the …\nProduces a multi-bit selection mask from a range of …\nWraps a raw memory value as a <code>BitStore</code> type.\nWraps an existing buffer as a bit-array.\nTries to construct a <code>BitPtr</code> from a memory location and a …\nConstructs a new, empty, bit-vector.\nConstructs a <code>BitPtr</code> from an address and head index, …\nTests if at least one bit is cleared to <code>0</code> in the bit-slice.\nTests if every bit is cleared to <code>0</code> in the bit-slice.\nCreates a new bit-pointer at a specified offset from the …\nCalculates the distance (in bits) between two bit-pointers.\nGets a raw pointer to the memory element containing the …\nGets a raw pointer to the memory location containing the …\nAttempts to remove the trailing bit from the bit-vector.\nAppends a single bit to the vector.\nDecomposes a bit-pointer into its element address and bit …\nIterates over non-overlapping subslices of a bit-slice, …\nIterates over non-overlapping subslices of a bit-slice, …\nIterates over non-overlapping mutable subslices of a …\nIterates over non-overlapping mutable subslices of a …\nReads the bit from <code>*self</code>.\nReads the bit from <code>*self</code> using an unaligned memory access.\nReads the bit from <code>*self</code> using a volatile load.\nRemoves a bit at a given position, shifting all bits after …\nCreates a bit-vector by repeating a bit-slice <code>n</code> times.\nCreates a new bit-vector by repeating a bit for the …\nMoves <code>src</code> into the referenced bit, returning the previous …\nReplaces the bit at <code>*self</code> with a new value, returning the …\nWrites a new value into a bit, and returns its previous …\nWrites a new value into a bit, returning the previous …\nEnsures that the bit-vector has allocation capacity for <em>at </em>…\nEnsures that the bit-vector has allocation capacity for <em>at </em>…\nResizes the bit-vector to a new length. New bits are …\nResizes the bit-vector to a new length, using a function …\nRetains only the bits that the predicate allows.\nReverses the order of bits in a bit-slice.\nRotates the contents of a bit-slice to the left (towards …\nRotates the contents of a bit-slice to the right (away …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nIterates over mutable subslices separated by bits that …\nIterates over mutable subslices separated by bits that …\nProduces a single-bit selection mask from a bit-index.\nWrites <code>value</code> into the proxy.\nWrites a new value into a single bit.\nWrites a new value into a single bit, using alias-safe …\nWrites a new value into a single bit, using alias-safe …\nOverwrites each element (visible in <code>.as_raw_mut_slice()</code>) …\nResizes a bit-vector to a new length.\nWrites a new value into a single bit, without bounds …\nSets the uninitialized bits of a bit-vector to a known …\nShifts the contents of a bit-slice “left” (towards the …\nShifts the contents of a bit-slice “right” (away from …\nReleases excess capacity back to the allocator.\nTests if at least one bit is set to <code>1</code>, and at least one …\nModifies <code>self.drain()</code> so that the removed bit-slice is …\nIterates over subslices separated by bits that match a …\nSplits a bit-slice in two parts at an index.\nSplits a mutable bit-slice in two parts at an index.\nSplits a bit-slice at an index, without bounds checking.\nSplits a mutable bit-slice at an index, without bounds …\nSplits the bit-slice into a reference to its first bit, …\nSplits the bit-slice into mutable references of its first …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nSplits the bit-slice into a reference to its last bit, and …\nSplits the bit-slice into mutable references to its last …\nIterates over mutable subslices separated by bits that …\nSplits the bit-vector in half at an index, moving …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nThe lower, inclusive, bound of the range. The bit to which …\nTests if the bit-slice begins with the given sequence.\nInteger Storing\nBig-Endian Integer Storing\n<code>Msb0</code> Big-Endian Integer Storing\n<code>Lsb0</code> Big-Endian Integer Storing\nLittle-Endian Integer Storing\n<code>Lsb0</code> Little-Endian Integer Storing\n<code>Msb0</code> Little-Endian Integer Storing\nStores a value into the memory system. This is only called …\nRemoves a prefix bit-slice, if present.\nRemoves a suffix bit-slice, if present.\nAdjusts a bit-pointer downwards in memory. This is …\nSwaps the bit values of two proxies.\nSwaps the bits at two mutable locations.\nExchanges the bit values at two indices.\nTakes a bit out of the bit-vector.\nSwaps two bits in a bit-slice, without bounds checking.\nSwaps the contents of two bit-slices.\nCopies a bit-slice into an owned bit-vector.\nRemoves write permissions from a bit-pointer.\nAdds write permissions to a bit-pointer.\nDecomposes a bit-pointer into its address and head-index …\nCounts the number of bits from the end of the bit-slice to …\nCounts the number of bits from the end of the bit-slice to …\nShortens the bit-vector, keeping the first <code>new_len</code> bits …\nAttempts to view <code>self</code> as an immutable bit-slice region …\nAttempts to view <code>self</code> as a mutable bit-slice region with …\nAttempts to convert an ordinary boxed slice into a boxed …\nAttempts to construct a shared <code>&amp;BitSlice</code> reference over a …\nFallibly constructs a new bit-vector from a slice of …\nAttempts to construct an exclusive <code>&amp;mut BitSlice</code> reference …\nAttempts to convert a regular vector in-place into a …\nAttempts to view a memory region as an immutable bit-slice.\nAttempts to view a memory region as a mutable bit-slice.\nViews a memory region as an immutable bit-slice.\nViews a memory region as a mutable bit-slice.\nIterates over consecutive windowing subslices in a …\nAllocates a new, empty, bit-vector with space for at least …\nAdjusts a bit-pointer upwards in memory, using wrapping …\nCreates a new bit-pointer at a specified offset from the …\nAdjusts a bit-pointer downwards in memory, using wrapping …\nWrites a new bit into the given location.\nWrites a bit into memory, tolerating unaligned addresses.\nWrites a new bit using volatile I/O operations.\nBytes buffer.\nString buffer that can hold arbitrary encoding string …\nView this string as UTF-8 string slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this string into owned UTF-8 string.\n<code>Plugins</code> is a wrapper of anymap2 and provides a thread-safe …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>AsyncReadAdapter</code> adapts a <code>RangeReader</code> to an <code>AsyncRead</code>.\n<code>FileReader</code> is a <code>RangeReader</code> for reading a file.\nThe maximum size per read for the inner reader in …\n<code>Metadata</code> contains the metadata of a source.\n<code>RangeReader</code> reads a range of bytes from a source.\nThe buffer for the read bytes.\nThe length of the source in bytes.\nThe length of the content.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe inner <code>RangeReader</code>. Use <code>Mutex</code> to get rid of the borrow …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the metadata of the source.\nCreates a new <code>FileReader</code> for the file at the given path.\nThe current position from the view of the reader.\nReads the bytes in the given range.\nThe future for reading the next bytes.\nReads the bytes in the given range into the buffer.\nReads the bytes in the given ranges.\nSets the file size hint for the reader.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nExpose a reference to an inner secret\nExpose a mutable reference to an inner secret\nWrapper type for values that contains secrets.\nWrapper type for strings that contains secrets. See also …\nMarker trait for secret types which can be <code>Serialize</code>-d by …\nExpose secret: this is the only method providing access to …\nExpose secret: this is the only method providing access to …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a secret value using a pre-boxed value.\nCreate a secret value using the provided function as a …\nCreate a secret value using a function that can initialize …\nSame as <code>Self::new_with_ctr</code>, but the constructor can be …")